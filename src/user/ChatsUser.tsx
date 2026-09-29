import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, FlatList, ActivityIndicator, TouchableOpacity, Modal, Alert } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import AttachmentIcon from '../components/AttachmentIcon';
import SendIcon from '../components/SendIcon';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../components/Urls';

const ChatsUser = ({route}) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  
  const { employeeData } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('userData');
        if (savedData !== null) {
          const parsedData = JSON.parse(savedData);
          console.log('Parsed userData from AsyncStorage:', parsedData); // Log here
          setUserData(parsedData);
        } else {
          console.log('No user data found in AsyncStorage.');
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
      }
    };
  
    getUserData();
  }, []);
  

  const getDisplayText = () => {
    if (userData) {
      return {
        // chatId: userData.id,
        from: userData.id,
        // employeeId: userData.id,
        type: userData.type,
        name: userData.username,
        image: userData.image ? { uri: userData.image } : require('../images/Profile.png')
      };
    }
    return {
      text: 'Loading...',
      position: 'Position',
      image: require('../images/Profile.png')
    };
  };

  const { from, name, image } = getDisplayText();

  useEffect(() => {
    if (userData) {
      handleFormId();
    }
  }, [userData]);

  const handleFormId = async () => {
    try {
      const adminId = `${employeeData.id}`;
      const employeeId = userData.id;
      console.log('Admin Id:', adminId);
      console.log('Employee Id:', employeeId);
  
      // Step 1: Generate a unique key for storing chatId based on user identifiers
      const chatKey = `chatId_${employeeId}_${adminId}`;
  
      // Step 2: Try to get the chatId from AsyncStorage
      let chatId = await AsyncStorage.getItem(chatKey);
      let hasMessages = false;
  
      // Step 3: Check if a chatId is found in storage
      if (chatId) {
        console.log('Retrieved Chat ID from storage:', chatId);
  
        // Fetch existing messages using the stored chatId
        try {
          const response = await api.get('employee/message/chatMessages', {
            params: { employeeId, adminId, chatId }, // Using chatId from storage
          });
  
          if (response.data.status === 'success' && response.data.data.length > 0) {
            console.log('Messages found for the existing chat:', response.data.data);
            hasMessages = true; // Messages exist, no need to create a new chat
          } else {
            console.log('No messages found for the existing chat.');
          }
        } catch (error) {
          console.error(`Error fetching messages: ${error.message}`);
          console.error('Error response data:', error.response?.data);
        }
      }
  
      // Step 4: If no chatId in storage or no messages found, create a new chat
      if (!chatId || !hasMessages) {
        console.log('Creating a new chat...');
        const newChatResponse = await api.post('employee/chat/addRecord', {
          employeeId,
          adminId,
        });
  
        if (newChatResponse.status === 200 && newChatResponse.data.status === 'success') {
          chatId = newChatResponse.data.data.id;
          if (chatId) {
            // Save the new chatId in AsyncStorage
            await AsyncStorage.setItem(chatKey, chatId);
            console.log('New Chat ID saved to storage:', chatId);
  
            // Fetch messages for the new chatId
            const fetchNewMessages = await api.get('employee/message/chatMessages', {
              params: { employeeId, adminId, chatId }, // Using the new chatId
            });
  
            if (fetchNewMessages.data.status === 'success' && fetchNewMessages.data.data.length > 0) {
              console.log('Messages for the new chat:', fetchNewMessages.data.data);
            } else {
              console.log('No messages found for the newly created chat.');
            }
          } else {
            console.log('No ID found in response data');
          }
        } else {
          console.log('Failed to initiate a new chat');
        }
      }
    } catch (error) {
      console.error('API call error:', error.message);
      console.error('Error response data:', error.response?.data);
    } finally {
      closeDialog();
    }
  };
  
  
  
  
  
  
  
  const fetchMessages = async () => {
    const chatId = await AsyncStorage.getItem('recordId');
    if (!chatId) {
      setMessages([]); // Ensure messages is cleared if no chatId
      setLoading(false);
      return;
    }
  
    setLoading(true);
    try {
      const response = await api.get('employee/message/chatMessages', {
        params: { chatId },
      });
  
      if (response.data.status === 'success' && response.data.data.length > 0) {
        setMessages(response.data.data); // Only set messages if there’s data
      } else {
        setMessages([]); // Clear messages if no data returned
      }
    } catch (error) {
      console.error('Error fetching messages:', error.message);
      setMessages([]); // Clear messages on error
    } finally {
      setLoading(false); // Always stop loading
    }
  };
  
  useEffect(() => {
    fetchMessages();
  }, []);
  



  // Fetch messages when component mounts or userData changes
  useEffect(() => {
    if (userData) {
      fetchMessages();
    }
  }, [userData]);

  // Function to send a message
// Function to send a message
const sendMessage = async () => {
  if (inputText.trim() === '') {
    console.log('Message is empty.');
    return;
  }

  // Retrieve chatId from AsyncStorage
  const chatId = await AsyncStorage.getItem(`chatId_${userData.id}_${employeeData.id}`);
  
  if (!chatId) {
    console.log('No chatId found in AsyncStorage. Please check if chatId is being saved correctly.');
    Alert.alert('Error', 'Unable to send message. Chat ID is missing.');
    return;
  }

  console.log('Retrieved Chat ID from storage:', chatId);

  const message = inputText.trim();
  const requestBody = {
    chatId,   // Ensure chatId is included
    from,     // This is your user ID
    text: message,
  };

  console.log('Sending Request:', requestBody);

  try {
    const response = await api.post('employee/message/addRecord', requestBody);

    if (response.data.status === 'success') {
      setInputText(''); // Clear the input field
      console.log('Successfully sent message:', response.data);
      // Optionally, fetch the messages again to update the chat
      fetchMessages();
    } else {
      console.log('Failed to send message:', response.data);
    }
  } catch (error) {
    console.error('Error sending message:', error.message);
    if (error.response) {
      console.error('Error response data:', error.response.data);
      Alert.alert('Error', error.response.data.message || 'Failed to send message');
    }
  }
};


  const renderItem = ({ item }) => {
    const date = new Date(item.createdAt);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const upperCaseTime = `${formattedHours}:${formattedMinutes} ${period}`;

    return (
      <View style={{ marginVertical: 10 }}>
        {item.from === 'admin' ? (
          <View style={styles.receiverContainer}>
            <View style={styles.senderMessage}>
              <Text style={styles.messageText02}>{item.text}</Text>
            </View>
            <Text style={styles.timeText02}>{upperCaseTime}</Text>
          </View>
        ) : (
          <View style={styles.messageContainer}>
            <View style={styles.receiverMessage}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
            <Text style={styles.timeText03}>{upperCaseTime}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerHome}>
        <Image source={require('../images/HomeBg4.jpeg')} style={styles.image5Home} />
        <View style={styles.overlay}>
          <View style={styles.bgMainHome}>
            <TouchableOpacity onPress={handleBackPress}>
              <BtnBack />
            </TouchableOpacity>
            <View style={{ flex: 1, marginStart: 20 }}>
              <View style={styles.bgMainRecordsInfos}>
                <Text style={[styles.text5ContentAdmin, { marginStart: 10, fontSize: 20 }]}>{`${employeeData.firstName} ${employeeData.lastName}`}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Loading Modal */}
        {loading ? (
          <Modal
            animationType="fade"
            transparent={true}
            onRequestClose={() => setLoading(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent2}>
                <ActivityIndicator size="large" color="#9B9B9B" />
                <Text style={styles.modalText}>Loading...</Text>
              </View>
            </View>
          </Modal>
        ) : (
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            inverted
            contentContainerStyle={{ paddingHorizontal: 10, marginBottom: 100 }}
          />
        )}

        {/* Input Field for Sending Messages */}
        <View style={[styles.searchRow02]}>
          <View style={[styles.attachmentContainer02, { flex: 1, marginHorizontal: 10 }]}>
            <TextInput
              placeholder='Type a message'
              style={styles.attachmentText02}
              value={inputText}
              onChangeText={setInputText}
            />
            <TouchableOpacity style={{ marginEnd: 15 }} onPress={sendMessage} disabled={!inputText.trim()}>
              <AttachmentIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer02}>
            <TouchableOpacity onPress={sendMessage} disabled={!inputText.trim()}>
              <SendIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatsUser;
