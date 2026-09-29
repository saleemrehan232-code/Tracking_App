import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Image, FlatList, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Platform } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import SearchIcon from '../components/SearchIcon';
import * as Progress from 'react-native-progress';
import CheckInIcon from '../components/CheckInIcon';
import CheckOutIcon from '../components/CheckOutIcon';
import LeavesIcon from '../components/LeavesIcon';
import { Dropdown } from 'react-native-element-dropdown';
import CircularProgressBar from '../components/CircularProgressBar';
import { Button } from 'react-native';
import MessageIcon from '../components/MessageIcon';
import CalenderIcon from '../components/CalenderIcon';
import BlueCalender from '../components/BlueCalender';
import BlueTimeIcon from '../components/BlueTimeIcon';
import CheckInIcon3 from '../components/CheckInIcon3';
import NotesIcon from '../components/NotesIcon';
import NotesIcon2 from '../components/NotesIcon2';
import { useNavigation } from '@react-navigation/native';
import CheckOutIcon2 from '../components/CheckOutIcon2';
import NotesIcon3 from '../components/NotesIcon3';
import { Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../components/Urls';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import { useFocusEffect } from '@react-navigation/native';


// Loading Modal
const LoadingModal = ({ loading }) => (
  <Modal animationType="fade" transparent={true} visible={loading}>
    <View style={styles.modalContainer}>
      <ActivityIndicator size={50} color="#ffffff" />
    </View>
  </Modal>
);

const CheckInOutUser = ({ onTime, earlyCheckOut, late }) => {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [checkOutLon, setCheckOutLon] = useState(null); // State for checkout longitude
  const [checkOutLat, setCheckOutLat] = useState(null);
  const [checkInLon, setCheckInLon] = useState(null);
  const [checkInLat, setCheckInLat] = useState(null);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [remarks, setRemarks] = useState('');  // State to store TextInput value

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);

  const [currentTime, setCurrentTime] = useState('');

  // Fetch check-in time from AsyncStorage

  const [checkInTime, setCheckInTime] = useState('00:00');
  const [checkOutTime, setCheckOutTime] = useState('00:00');
  // const [isCheckedIn, setIsCheckedIn] = useState(false);

  const checkCheckInStatus = async () => {
    try {
      const storedCheckInTime = await AsyncStorage.getItem('checkInTime');
      const storedCheckOutTime = await AsyncStorage.getItem('checkOutTime');

      console.log('Stored Check-In Time:', storedCheckInTime);
      console.log('Stored Check-Out Time:', storedCheckOutTime);

      // Check if check-in time exists and is not '00:00'
      if (storedCheckInTime && storedCheckInTime !== '00:00') {
        setCheckInTime(storedCheckInTime);
        setIsCheckedIn(true); // User is checked in
      } else {
        setIsCheckedIn(false); // User is not checked in
      }

      // Check if check-out time exists
      if (storedCheckOutTime && storedCheckOutTime !== '00:00') {
        setCheckOutTime(storedCheckOutTime);
        setIsCheckedIn(false); // After check-out, reset to false
      }
    } catch (error) {
      console.error('Error fetching check-in/out times:', error);
    }
  };

  // Call the function when the component mounts
  useEffect(() => {
    checkCheckInStatus();
  }, []);

  useEffect(() => {
    console.log('Check-In Time State after update:', checkInTime);
    console.log('Check-Out Time State after update:', checkOutTime);
  }, [checkInTime, checkOutTime]);

  // Log the updated times whenever checkInTime or checkOutTime changes
  useEffect(() => {
    console.log('Updated Check-in Time:', checkInTime);
    console.log('Updated Check-out Time:', checkOutTime);
  }, [checkInTime, checkOutTime]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const period = hours >= 12 ? 'PM' : 'AM';

      // Convert 24-hour time to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // Handle 0 as 12
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero to minutes

      // Format time
      const timeString = `${hours}:${formattedMinutes} ${period}`;
      setCurrentTime(timeString);
    };

    // Update time every second
    const timer = setInterval(updateTime, 1000);

    // Initialize time on mount
    updateTime();

    // Cleanup the interval on unmount
    return () => clearInterval(timer);
  }, []);

  const [currentTime2, setCurrentTime2] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime2({
        hours: String(now.getHours()).padStart(2, '0'),
        minutes: String(now.getMinutes()).padStart(2, '0'),
        seconds: String(now.getSeconds()).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const handleCheckToggle = () => {
    setIsCheckedIn(!isCheckedIn); // Toggle the state
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('userData');
        if (savedData !== null) {
          const parsedData = JSON.parse(savedData);
          setUserData(parsedData);

          // const checkInStatus = await AsyncStorage.getItem('isCheckedIn');
          // setIsCheckedIn(checkInStatus === 'true');
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
      }
    };

    getUserData();
  }, []);


  const handleCheckIn = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to Check In?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            setLoading(true);
            requestLocationPermission();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const requestLocationPermission = async () => {
    const permission = Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    const result = await request(permission);

    if (result === 'granted') {
      getCurrentLocation();
    } else {
      Alert.alert('Permission Denied', 'Location permission is required for check-in.');
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCheckInLon(longitude);
        setCheckInLat(latitude);
        checkInApi(latitude, longitude);
      },
      (error) => {
        if (error.code === 3) {
          console.warn("Location timed out. Retrying...");
          retryGetCurrentLocation();
        } else {
          Alert.alert('Alert', 'Turn on the location for check in');
          // handleLocationError(error);
          setLoading(false);
        }
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 5000 }
    );
  };

  const retryGetCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCheckInLon(longitude);
        setCheckInLat(latitude);
        checkInApi(latitude, longitude);
      },
      (error) => {
        handleLocationError(error);
        setLoading(false);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 5000 }
    );
  };

  const checkInApi = async (latitude, longitude) => {
    if (!userData?.id) {
      Alert.alert('Error', 'User ID is missing.');
      setLoading(false);
      return;
    }

    const payload = JSON.stringify({
      employeeId: userData.id,
      remarks: remarks || '',
      checkInLon: longitude,
      checkInLat: latitude,
    });

    console.log("API Payload:", payload);

    try {
      const response = await api.post(
        'employee/attendance/checkIn',
        payload,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      const responseData = response.data;
      if (responseData.status === 'success') {
        Alert.alert('Success', 'You have successfully checked in.');
        setIsCheckedIn(true);
        await AsyncStorage.setItem('isCheckedIn', 'true');
      } else {
        Alert.alert('Alert', responseData.message || 'Failed to check in.');
      }
    } catch (error) {
      console.error("API Error:", error);

      if (error.response) {
        console.error("API Error Response:", error.response.data);
        Alert.alert('Alert', error.response.data.message || 'Failed to check in. Please try again.');
      } else {
        Alert.alert('Error', 'Failed to check in. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCheckOut = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to Check Out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            setLoading(true);
            requestLocationPermissionForCheckout();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const requestLocationPermissionForCheckout = async () => {
    const permission = Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    const result = await request(permission);

    if (result === 'granted') {
      getCurrentLocationForCheckout();
    } else {
      Alert.alert('Permission Denied', 'Location permission is required for check-out.');
      setLoading(false);
    }
  };

  const getCurrentLocationForCheckout = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCheckOutLon(longitude);
        setCheckOutLat(latitude);
        checkOutApi(latitude, longitude);
      },
      (error) => {
        if (error.code === 3) {
          console.warn("Location timed out. Retrying...");
          retryGetCurrentLocationForCheckout();
        } else {
          // handleLocationError(error);
          Alert.alert('Alert', 'Turn on the location for check out');
          setLoading(false);
        }
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 5000 }
    );
  };

  const retryGetCurrentLocationForCheckout = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCheckOutLon(longitude);
        setCheckOutLat(latitude);
        checkOutApi(latitude, longitude);
      },
      (error) => {
        handleLocationError(error);
        setLoading(false);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 5000 }
    );
  };

  const checkOutApi = async (checkOutLat, checkOutLon) => {
    if (!userData?.id) {
      Alert.alert('Error', 'User ID is missing.');
      setLoading(false);
      return;
    }

    const payload = JSON.stringify({
      employeeId: userData.id,
      checkOutLon: checkOutLon,
      checkOutLat: checkOutLat,
    });

    console.log("Checkout API Payload:", payload);

    try {
      const response = await api.post(
        'employee/attendance/checkOut',
        payload,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      const responseData = response.data;
      if (responseData.status === 'success') {
        Alert.alert('Success', 'You have successfully checked out.');
        setIsCheckedIn(false);
        await AsyncStorage.setItem('isCheckedIn', 'false');
      } else {
        Alert.alert('Alert', responseData.message || 'Failed to check out.');
      }
    } catch (error) {
      console.error("Checkout API Error:", error);

      if (error.response) {
        console.error("Checkout API Error Response:", error.response.data);
        Alert.alert('Alert', error.response.data.message || 'Failed to check out. Please try again.');
      } else {
        Alert.alert('Error', 'Failed to check out. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const totalDays = onTime + earlyCheckOut + late;
  const onTimePercentage = onTime / totalDays;
  const earlyCheckOutPercentage = earlyCheckOut / totalDays;
  const latePercentage = late / totalDays;

  const getDisplayText = () => {
    if (userData) {
      return {
        id: userData.id || 'Unknown Care',
      };
    }
    return {
      id: 'Id id null',
    };
  };

  const { id } = getDisplayText();

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



  const data = {
    onTime: { count: 80, color: '#1DCF6F' }, // Green color
    earlyCheckOut: { count: 60, color: '#F1A100' }, // Orange color
    late: { count: 40, color: '#E2502B' }, // Red color
    total: 100
  };

  const ProgressBar = ({ count, total, color }) => {
    const percentage = (count / total) * 100;
    return (
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
    );
  };

  const dataDropdown = [
    { label: 'Today', value: 'Today' },
    { label: 'Yesterday', value: 'Yesterday' },
    { label: 'Tomorrow', value: 'Tomorrow' },
  ];

  const [dropdownValue, setDropdownValue] = useState('Select');

  const navigation = useNavigation();


  const showDialog = () => {
    setIsDialogVisible(true);
  };

  const closeDialog = () => {
    setIsDialogVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.containerHome}>
          <Image source={require('../images/HomeBg4.jpeg')} style={styles.image5Home} />
          <View style={styles.overlay}>
            <View style={styles.bgMainHome}>
              <View style={styles.viewFlexHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <BtnBack />
                </TouchableOpacity>
              </View>
              <View style={styles.viewFlexCenter}>
                <Text style={styles.textContentAdmin}>Check In</Text>
              </View>
              <View style={[styles.viewFlexHeader]}></View>

            </View>
          </View>

          <View style={[styles.attendanceContainer, { padding: 15 }]}>

            <View style={styles.dateTimeRow}>

              <View style={styles.bgMainRecordsInfos}>
                <BlueCalender />
                <Text style={[styles.dateText, { marginStart: 10 }]}>{currentDate}</Text>
              </View>

              <View style={styles.bgMainRecordsInfos}>
                <BlueTimeIcon />
                <Text style={[styles.timeText, { marginStart: 10 }]}>{currentTime}</Text>
              </View>

            </View>

            <View style={styles.timerRow}>
              <Text style={styles.timerText}>{currentTime2.hours}</Text>
              <Text style={styles.timerText}>{currentTime2.minutes}</Text>
              <Text style={styles.timerText}>{currentTime2.seconds}</Text>
              <Text style={styles.hrsText}>HRS</Text>
            </View>

            {/* Shift Info */}
            <Text style={styles.shiftText}>General 8:00 AM to 5:00 PM</Text>


            {/* Conditionally render Check In or Check Out buttons */}
            {!isCheckedIn ? (
              <View style={[styles.buttonsRow, { marginHorizontal: 20 }]}>
                <TouchableOpacity style={styles.notesButton} onPress={showDialog}>
                  <View style={styles.bgMainRecordsInfos}>
                    <NotesIcon2 />
                    <Text style={[styles.buttonText, { marginStart: 10 }]}>Notes</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.checkInButton} onPress={handleCheckIn}>
                  <View style={styles.bgMainRecordsInfos}>
                    <CheckInIcon3 />
                    <Text style={[styles.buttonTextIn, { marginStart: 10 }]}>Check In</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={[styles.buttonsRow, { marginTop: 0 }]}>
                <TouchableOpacity>
                  <View style={styles.bgMainRecordsInfos}>
                    <NotesIcon3 />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.notesButton, { marginStart: 10 }]}>
                  <View style={styles.bgMainRecordsInfos}>
                    <BlueTimeIcon />
                    <Text style={[styles.buttonText, { marginStart: 10 }]}>Break</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.checkInButton02} onPress={handleCheckOut}>
                  <View style={styles.bgMainRecordsInfos}>
                    <CheckOutIcon2 />
                    <Text style={[styles.buttonTextIn, { marginStart: 10 }]}>Check Out</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}

            <Modal
              animationType="slide"
              transparent={true}
              visible={isDialogVisible}
              onRequestClose={closeDialog}>
              <View style={styles.dialogContainer}>
                <View style={styles.dialogBox}>
                  <TextInput style={[styles.input4, { backgroundColor: '#FFFFFF', height: 150, textAlignVertical: 'top' }]} onChangeText={setRemarks} placeholder="Enter Something" />
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.acceptButton02} onPress={closeDialog}>
                      <Text style={styles.buttonTextDialog}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          {/* Request Leave Section */}
          <View style={styles.leaveContainerIn}>
            <Text style={styles.leaveTitle}>Request a leave</Text>
            <Text style={styles.leaveSubtitle}>Day off's require Manager's approvals.</Text>
            <TouchableOpacity style={styles.requestButton} onPress={() => navigation.navigate('LeaveRequestAdmin')}>
              <Text style={styles.requestButtonText}>Request</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={[styles.checkOutContainer, styles.bgInofoRecords, styles.topSpace]}>
            <View style={styles.viewAttandandce}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgressBar />
              </View>
            </View>
            <View style={styles.viewAttandandces2}>
              <View>
                <View style={styles.bgMainAttandance}>
                  <Text style={styles.labelAttandance01}>On time</Text>
                  <Text style={styles.labelAttandance01}>{data.onTime.count} times</Text>
                </View>
                <View style={styles.statusRow}>
                  <ProgressBar count={data.onTime.count} total={data.total} color={data.onTime.color} />
                </View>
              </View>
              <View>
                <View style={styles.bgMainAttandance}>
                  <Text style={styles.labelAttandance}>Early check out</Text>
                  <Text style={styles.labelAttandance}>{data.earlyCheckOut.count} times</Text>
                </View>
                <View style={styles.statusRow}>
                  <ProgressBar count={data.earlyCheckOut.count} total={data.total} color={data.earlyCheckOut.color} />
                </View>
              </View>
              <View>
                <View style={styles.bgMainAttandance}>
                  <Text style={styles.labelAttandance}>Late</Text>
                  <Text style={styles.labelAttandance}>{data.late.count} times</Text>
                </View>
                <View style={styles.statusRow}>
                  <ProgressBar count={data.late.count} total={data.total} color={data.late.color} />
                </View>
              </View>
            </View>
          </View> */}

          <View style={styles.bgMainRecords}>
            <View>
              <Text style={styles.titlePersonal}>Recent Activity</Text>
            </View>

            <View style={styles.dropdownContainerList3}>
              <Dropdown
                placeholderStyle={styles.placeholderStyleList2}
                selectedTextStyle={styles.selectedTextStyleList2}
                data={dataDropdown}
                labelField="label"
                valueField="value"
                placeholder="Today"
                value={dropdownValue}
                onChange={(item) => {
                  setDropdownValue(item.value);
                }}
              />
            </View>

          </View>

          {/* <View style={styles.checkOutContainer2}>
            <FlatList
              data={employees}
              keyExtractor={(item) => item.id}
              renderItem={renderEmployee}
              showsVerticalScrollIndicator={false}
            />
          </View> */}

          <View style={styles.checkOutContainer2}>
            <FlatList
              data={reportData}
              renderItem={renderEmployee}
              keyExtractor={(item) => item.id}
            />
          </View>

        </View>
      </ScrollView>
      {/* Loading Modal */}
      <LoadingModal loading={loading} />
    </SafeAreaView>
  );
};

export default CheckInOutUser;
