import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, FlatList, ActivityIndicator, TouchableOpacity, Modal } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import CallIcon from '../components/CallIcon';
import VideoCallIcon from '../components/VideoCallIcon';
import AttachmentIcon from '../components/AttachmentIcon';
import SendIcon from '../components/SendIcon';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../components/Urls';

const ChatsAdmin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  // Function to fetch user data from AsyncStorage
  useEffect(() => {
    const getUserData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('userData');
        if (savedData !== null) {
          const parsedData = JSON.parse(savedData);
          setUserData(parsedData);
          console.log('Data retrieved from AsyncStorage:', parsedData);
        } else {
          console.log('No user data found in AsyncStorage.');
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
      }
    };

    getUserData();
  }, []);

  // Function to get display text
  const getDisplayText = () => {
    if (userData) {
      return {
        chatId: userData.id,
        from: userData.id,
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

  const { chatId, from, name, image } = getDisplayText();

  // Fetch chat messages from API
  const fetchMessages = async () => {
    try {
      const response = await api.get('admin/message/chatMessages', {
        params: { chatId },
      });

      if (response.data.status === 'success') {
        setMessages(response.data.data);
      } else {
        console.error('Unexpected response status:', response.data.status);
      }
    } catch (error) {
      console.error(`Error fetching messages: ${error.message}`);
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response headers:', error.response.headers);
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch messages when component mounts or userData changes
  useEffect(() => {
    if (userData) {
      fetchMessages();
    }
  }, [userData]);


// Function to send a message
const sendMessage = async () => {
  if (inputText.trim() === '') {
    console.log('Message is empty.');
    return;
  }

  const message = inputText;
  const requestBody = {
    chatId,
    from,
    text: message,
  };
  console.log('Request body:', requestBody);

  // Create a new message object to update the state immediately
  const newMessage = {
    id: Math.random().toString(), // Generate a unique ID for the message
    from,
    text: message,
    createdAt: new Date().toISOString(), // Use the current date and time
  };

  // Update the messages state immediately
  setMessages((prevMessages) => [newMessage, ...prevMessages]);

  try {
    const response = await api.post('admin/message/addRecord', requestBody);

    if (response.data.status === 'success') {
      setInputText(''); // Clear the input field
      console.log('Successfully sent message:', response.data);
      // Optionally, you can fetch messages again to ensure you have the latest from the server
      // fetchMessages(); 
    } else {
      console.log('Error sending message:', response.data);
    }
  } catch (error) {
    console.error('Error sending message:', error);
    if (error.response) {
      console.error('Error response data:', error.response.data);
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
          // <View style={styles.messageContainer}>
          //   <View style={styles.receiverMessage}>
          //     <Text style={styles.messageText}>{item.text}</Text>
          //   </View>
          //   <Text style={styles.timeText03}>{upperCaseTime}</Text>
          // </View>
          <View style={styles.receiverContainer}>
          <View style={styles.senderMessage}>
            <Text style={styles.messageText02}>{item.text}</Text>
          </View>
          <Text style={styles.timeText02}>{upperCaseTime}</Text>
        </View>
        ) : (
          // <View style={styles.receiverContainer}>
          //   <View style={styles.senderMessage}>
          //     <Text style={styles.messageText02}>{item.text}</Text>
          //   </View>
          //   <Text style={styles.timeText02}>{upperCaseTime}</Text>
          // </View>
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
                <Image source={image} style={styles.logoHome02} />
                <Text style={[styles.text5ContentAdmin, { marginStart: 10, fontSize: 20 }]}>{name}</Text>
              </View>
            </View>
            <View style={styles.btnNextAdmin}>
              <View style={styles.bgMainRecordsInfos}>
                <VideoCallIcon />
                <View style={{ marginStart: 7 }}>
                  <CallIcon />
                </View>
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

export default ChatsAdmin;
