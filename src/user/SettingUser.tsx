import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckInIcon from '../components/CheckInIcon';
import LeavesIcon from '../components/LeavesIcon';
import api from '../components/Urls';
import { useFocusEffect } from '@react-navigation/native';

const SettingUser = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };

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

  const getDisplayText = () => {
    if (userData) {
      return {
        id: userData.id || 'Unknown Care',
        text: userData.username || 'Unknown Care',
        position: userData.position || 'Unknown Care',
        image: userData.image ? { uri: userData.image } : require('../images/Profile.png')
      };
    }
    return {
      id: 'Id id null',
      text: 'Loading...',
      position: 'Position',
      image: require('../images/Profile.png')
    };
  };

  const { id, text } = getDisplayText();

  const [reportData, setReportData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchAttendanceData = async () => {
        setLoading(true);
        console.log('Employee ID:', id);
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        try {
          const response = await api.get(`admin/attendance/monthlyReport?month=${month}&year=${year}&employeeId=${id}`);
          console.log('API Response:', response.data);
          if (response.data.status === 'success') {
            setReportData(response.data.data);
          } else {
            console.error('Failed to fetch data:', response.data);
          }
        } catch (error) {
          console.error('Error fetching attendance data:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchAttendanceData();
    }, [id]) // The API call will be triggered whenever `id` changes or the screen is focused
  );

  const renderEmployee = ({ item }) => {
    // Format Check-In and Check-Out times and dates
    const formattedCheckInTime = item.checkInTime
      ? new Date(item.checkInTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      : "-------";

    const formattedCheckInDate = item.checkInTime
      ? new Date(item.checkInTime).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      : "-------";

    const formattedCheckOutTime = item.checkOutTime
      ? new Date(item.checkOutTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      : "-------";

    const formattedCheckOutDate = item.checkOutTime
      ? new Date(item.checkOutTime).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      : "-------";

    // Conditional status style
    let statusStyle = [styles.status];
    if (item.checkInStatus === 'on-time') {
      statusStyle.push(styles.onTime);
    } else if (item.checkInStatus === 'late') {
      statusStyle.push(styles.late);
    } else if (item.checkInStatus === 'early') {
      statusStyle.push(styles.early); // Set text color to blue if early
    } else {
      statusStyle.push(styles.default);
    }

    // Determine whether to show '-----' or actual status
    const shouldShowStatus = formattedCheckOutDate === "-------" || formattedCheckOutTime === "-------";

    return (
      <View style={[styles.checkOutContainers002, { paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
        {/* Start Shift Section */}
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={styles.titleTask03}>Start Shift</Text>
          <Text style={[styles.position002, { marginTop: 5 }]}>{formattedCheckInDate}</Text>
          <Text style={[styles.position002, { marginTop: 5 }]}>{formattedCheckInTime}</Text>
          <Text style={[...statusStyle, { marginTop: 3 }]}>
            {item.checkInStatus}
          </Text>
        </View>

        {/* Divider Line */}
        <View style={{ width: 0.4, backgroundColor: '#D5D5D5', height: '100%' }}></View>

        {/* End Shift Section */}
        <View style={{ flex: 1, alignItems: 'flex-end', padding: 10 }}>
          <Text style={styles.titleTask03}>End Shift</Text>
          <Text style={[styles.position002, { marginTop: 5 }]}>
            {formattedCheckOutDate || "-------"}
          </Text>
          <Text style={[styles.position002, { marginTop: 5 }]}>
            {formattedCheckOutTime || "-------"}
          </Text>
          <Text style={[statusStyle, { marginTop: 3, color: shouldShowStatus ? '#4E4E4E' : '#009470' }]}>
            {shouldShowStatus ? "------" : (item.isEarlyCheckOut ? 'early' : 'on time')}
          </Text>
        </View>

      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.containerHome}>
          <Image source={require('../images/HomeBg4.jpeg')} style={styles.image5Home} />
          <View style={styles.overlay}>
            <View style={styles.bgMainHome}>
              <View style={styles.viewFlexHeader}>
                <TouchableOpacity onPress={handleBackPress}>
                  <BtnBack />
                </TouchableOpacity>
              </View>
              <View style={[styles.viewFlexCenter]}>
                <Text style={styles.textContentAdmin}>Records</Text>
              </View>
              <View style={[styles.viewFlexHeader]}></View>
            </View>
          </View>

          <View style={styles.checkOutContainer2}>
            <FlatList
              data={reportData}
              renderItem={renderEmployee}
              keyExtractor={(item) => item.id}
            />
          </View>

          {loading && (
            <Modal
              animationType="fade"
              transparent={true}
              onRequestClose={() => setLoading(false)}>
              <View style={styles.modalContainer}>
                  <ActivityIndicator size={50} color="#ffffff" />
              </View>
            </Modal>
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingUser;
