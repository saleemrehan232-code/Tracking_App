import { View, Text, SafeAreaView, ScrollView, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { styles } from '../screens/StyleSheet'
import RecordIcon from '../components/RecordIcon'
import ChatIcon from '../components/ChatIcon'
import { Dropdown } from 'react-native-element-dropdown';
import { TouchableOpacity } from 'react-native'
import InfoIcon2 from '../components/InfoIcon2'
import CheckOutIcon from '../components/CheckOutIcon'
import CheckInIcon from '../components/CheckInIcon'
import LeavesIcon from '../components/LeavesIcon'
import RateIcon from '../components/RateIcon'
import ChechInIcon2 from '../components/ChechInIcon2'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import InfoIcon3 from '../components/InfoIcon3'
import TaskBarChart from '../components/TaskBarChart'
import CalenderIcon4 from '../components/CalenderIcon4'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoutIcon from '../components/LogoutIcon'
import { Modal } from 'react-native'
import api from '../components/Urls'
import { ActivityIndicator } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

// const tasks = [
//   {
//     id: '1',
//     title: 'Look after the patient',
//     time: 'March 25 - 12:00 PM',
//     description: 'Look after John he has injured his leg.',
//     statusIcon: <InfoIcon2 />,
//   },
//   {
//     id: '2',
//     title: 'Prepare patient records',
//     time: 'March 26 - 10:00 AM',
//     description: 'Complete the record update for Jane’s injury.',
//     statusIcon: <InfoIcon2 />,
//   },
// ];

const HomeUser = (props) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [employes, setEmployes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [hourlyRate, setHourlyRate] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [userData, setUserData] = useState(null);

  const showDialog = () => {
    setIsDialogVisible(true);
  };

  const closeDialog = () => {
    setIsDialogVisible(false);
  };

  const navigation = useNavigation();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('userData');
        if (savedData !== null) {
          // Parse the saved data and update state
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

  // get data from Async Storage
  const { id, text, position, image } = getDisplayText();

  useFocusEffect(
    useCallback(() => {
      if (id) {
        fetchEmployees(id);
        console.log("fetchEmployees called on screen focus", id);
      } else {
        console.error("Employee ID is not provided.");
      }
    }, [id])
  );

  // const fetchEmployees = async (employeeId) => {
  //   try {
  //     setLoading(true);
  //     const currentDate = new Date().toISOString().split('T')[0];

  //     const response = await api.get(`employee/attendance/employeeReport?employeeId=${employeeId}&date=${currentDate}`);
  //     console.log('API Response:', response.data);

  //     if (response.data && response.data.data && Array.isArray(response.data.data.report) && response.data.data.report.length > 0) {
  //       setEmployes(response.data.data.report);

  //       const hourlyRateValue = response.data.data.employeeData.hourlyRate;
  //       setHourlyRate(hourlyRateValue);

  //       console.log('API Response:', response.data);

  //       const checkIn = response.data.data.report[0].checkInTime;
  //       const checkOut = response.data.data.report[0].checkOutTime;

  //       console.log('checkIn Time', checkIn);
  //       console.log('checkOut Time', checkOut);

  //       // Convert timestamps to readable format
  //       setCheckInTime(checkIn ? new Date(checkIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : '00:00');
  //       setCheckOutTime(checkOut ? new Date(checkOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : '00:00');

  //       // Save to AsyncStorage
  //       await AsyncStorage.setItem('checkInTime', setCheckInTime);
  //       await AsyncStorage.setItem('checkOutTime', setCheckOutTime);

  //       console.log('Check-in and Check-out times saved successfully!');

  //     } else {
  //       console.log('No employee data found.');
  //       setEmployes([]);
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching employee data:', error);
  //     setLoading(false);
  //   }
  // };

  const fetchEmployees = async (employeeId) => {
    try {
      setLoading(true);
      const currentDate = new Date().toISOString().split('T')[0];

      const response = await api.get(`employee/attendance/employeeReport?employeeId=${employeeId}&date=${currentDate}`);
      console.log('API Response:', response.data);

      if (response.data && response.data.data && Array.isArray(response.data.data.report) && response.data.data.report.length > 0) {
        setEmployes(response.data.data.report);

        const hourlyRateValue = response.data.data.employeeData.hourlyRate;
        setHourlyRate(hourlyRateValue);

        console.log('Employee Data:', response.data.data);

        const checkIn = response.data.data.report[0].checkInTime;
        const checkOut = response.data.data.report[0].checkOutTime;

        console.log('Check-In Time:', checkIn);
        console.log('Check-Out Time:', checkOut);

        // Convert timestamps to readable format
        const formattedCheckInTime = checkIn
          ? new Date(checkIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
          : '00:00';
        const formattedCheckOutTime = checkOut
          ? new Date(checkOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
          : '00:00';

        // Set the state with formatted times
        setCheckInTime(formattedCheckInTime);
        setCheckOutTime(formattedCheckOutTime);

        // Save formatted times to AsyncStorage
        await AsyncStorage.setItem('checkInTime', formattedCheckInTime);
        await AsyncStorage.setItem('checkOutTime', formattedCheckOutTime);

        console.log('Check-in and Check-out times saved successfully!');

      } else {
        console.log('No employee data found.');
        setEmployes([]);
      }
    } catch (error) {
      console.error('Error fetching employee data:', error);
    } finally {
      setLoading(false);
    }
  };
  const confirmLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          style: 'default',
          onPress: () => handleLogout()
        }
      ],
      { cancelable: true }
    );
  };

  const handleLogout = async () => {
    try {
      // await AsyncStorage.removeItem('userData');
      await AsyncStorage.clear();
      navigation.replace('SelectDepartment');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const dataDropdown = [
    { label: 'Today', value: 'Today' },
    { label: 'Yesterday', value: 'Yesterday' },
    { label: 'Tomorrow', value: 'Tomorrow' },
  ];

  const [dropdownValue, setDropdownValue] = useState('Select');

  const [progress, setProgress] = useState(90);

    useFocusEffect(
      useCallback(() => {
          const fetchEmployees = async () => {
              if (!id) {
                  console.warn('ID is missing, skipping API call.');
                  return;
              }

              setLoading(true);

              try {
                  console.log('Fetching employee tasks for ID:', id);
                  const response = await api.get(`employee/task/employeeTasks/${id}`);
                  console.log('API Response:', response);

                  if (response.data?.status === 'success' && Array.isArray(response.data?.data)) {
                      setTasks(response.data.data);
                  } else {
                      console.warn('No tasks found for the given ID:', id);
                  }
              } catch (error) {
                  console.error('Error fetching employee task data:', error.response?.data || error.message);
              } finally {
                  setLoading(false);
              }
          };

          fetchEmployees();

          // Cleanup if necessary
          return () => {
              setTasks([]); // Clear tasks if needed
              setLoading(false);
          };
      }, [id]) // Add dependencies to the callback
  );


  const renderItem = ({ item }) => (
    <View style={[styles.tabsBgContainers01, styles.bgInofoRecords]}>
      <View style={styles.textContainerTask}>
        <Text style={styles.titleTask}>{item.title}</Text>
        <View style={styles.bgMainRecordsInfos02}>
          <CalenderIcon4 />
          <Text style={[styles.time, { color: '#16B8A4', marginTop: 10 }]}>{item.date} - {item.time}</Text>
        </View>
        <Text style={styles.description}>{item.description1}</Text>
      </View>
      <View style={styles.statusContainer}>{item.statusIcon}</View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.containerHome}>

          <Image source={require('../images/HomeBg.jpeg')} style={styles.image4Home} />
          <View style={styles.overlay}>

            <View style={styles.bgMainHome}>
              <View style={styles.imagesRadiusBg02}>
                {/* <Image source={require('../images/Profile.png')} style={styles.avatarImage} /> */}
                <Image source={image} style={styles.logoHome02} />
              </View>
              <View style={{ flex: 1 }}>
                {/* <Text style={styles.text5ContentAdmin}>Hi, Shahinur</Text> */}
                <Text style={styles.text5ContentAdmin}>{text}</Text>

                <Text style={styles.text2ContentAdmin}>{position}</Text>
              </View>
              <View style={styles.btnNextAdmin}>
                {/* <NotificationIcon /> */}
                <TouchableOpacity onPress={confirmLogout}>
                  <LogoutIcon />
                </TouchableOpacity>
              </View>
            </View>

          </View>

          <View style={styles.viewOptionsBgs02}>

            <TouchableOpacity onPress={() => props.navigation.navigate('CheckInOutUser')}>
              <View style={styles.viewOptions}>
                <Image source={require('../images/ImageBg.png')} style={styles.backgroundImageHome} />
                <View style={styles.overlayContent}>
                  <ChechInIcon2 style={styles.imgCenter} />
                  <Text style={styles.textOptionHome}>Check In</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={showDialog}>
              <View style={styles.viewOptions}>
                <Image source={require('../images/ImageBg.png')} style={styles.backgroundImageHome} />
                <View style={styles.overlayContent}>
                  <ChatIcon style={styles.imgCenter} />
                  <Text style={styles.textOptionHome}>Chats</Text>
                </View>
              </View>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={isDialogVisible}
              onRequestClose={closeDialog}>
              <View style={styles.dialogContainer}>
                <View style={styles.dialogBox}>
                  <Text style={styles.headerDialog03}>Select Chat</Text>
                  <View style={[styles.buttonContainer, { marginTop: 0 }]}>
                    <TouchableOpacity
                      style={styles.acceptButton02}
                      onPress={() => {
                        closeDialog();
                        props.navigation.navigate('AllAdmin');
                      }}>
                      <Text style={styles.buttonTextDialog}>Chat with Admin</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.buttonContainer, { marginTop: 10 }]}>
                    <TouchableOpacity
                      style={styles.acceptButton02}
                      onPress={() => {
                        closeDialog();
                        props.navigation.navigate('AllModerator');
                      }}>
                      <Text style={styles.buttonTextDialog}>Chat with Moderator</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

            <TouchableOpacity onPress={() => props.navigation.navigate('LeaveRequestUser')}>
              <View style={styles.viewOptions}>
                <Image source={require('../images/ImageBg.png')} style={styles.backgroundImageHome} />
                <View style={styles.overlayContent}>
                  <RecordIcon style={styles.imgCenter} />
                  <Text style={styles.textOptionHome}>Leave</Text>
                </View>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.viewMargins}>

            <View style={styles.row}>
              <View style={styles.bgStatusChecked}>
                <View>
                  <Text style={styles.dataTitle}>{checkInTime || "00:00"}</Text>
                  <Text style={styles.dataLabel}>Checked In</Text>
                </View>
                <View>
                  <CheckInIcon />
                </View>
              </View>
              <View style={styles.bgStatus02Checked}>
                <View>
                  <Text style={styles.dataTitle}>{checkOutTime || "00:00"}</Text>
                  <Text style={styles.dataLabel}>Checked Out</Text>
                </View>
                <View >
                  <CheckOutIcon />
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.bgStatusChecked}>
                <View>
                  <Text style={styles.dataTitle}>12 to 1</Text>
                  <Text style={styles.dataLabel}>Break Time</Text>
                </View>
                <View>
                  <LeavesIcon />
                </View>
              </View>
              <View style={styles.bgStatus02Checked}>
                <View>
                  <Text style={styles.dataTitle}>1</Text>
                  <Text style={styles.dataLabel}>Monthly Leave</Text>
                </View>
                <View>
                  <RateIcon />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.containerHomeAdmin}>

            <View style={styles.mainBgHomeProgress}>
              <View>
                <Text style={styles.taskText}>Your daily task almost done!</Text>
                <TouchableOpacity style={styles.buttonHomeProgress} onPress={() => props.navigation.navigate('TaskDetailsAdmin')}>
                  <Text style={styles.buttonTextHome}>View Task</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.mainBgHomeProgress}>
              <View style={styles.circleContainer}>
                <AnimatedCircularProgress
                  size={70}
                  width={5}
                  fill={progress}
                  tintColor="#ffffff"
                  backgroundColor="#4A90E2"
                  rotation={130}
                  lineCap="round"
                >
                  {() => (
                    <Text style={styles.progressTextHome}>
                      {`${progress}%`}
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
              <InfoIcon3 style={styles.topZeroInfo} />
            </View>

          </View>


          <View style={[styles.card02, styles.bgInofoRecords]}>
            <View style={styles.bgMainHomeAdmin}>
              <View>
                <Text style={styles.sectionTitle}>Working Hours</Text>
              </View>
              {/* <View style={styles.btnNextAdmin}> */}
              <View style={styles.dropdownContainerList04}>
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
              {/* </View> */}
            </View>
            <Text style={styles.workingTime}>6 h 30 m</Text>
            <Text style={styles.subTitle}>Today</Text>
            <View style={styles.chartContainer}>
              <TaskBarChart />
            </View>
          </View>

          {/* Today's Tasks */}
          <View style={[styles.bgMainRecords, { marginTop: -20}]}>
            <View>
              <Text style={styles.sectionTitle}>Pending Task</Text>
            </View>
          </View>

          {/* <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          /> */}

          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={<Text style={[styles.emptyText02, { marginBottom: 15}]}>No Record Found</Text>}
          />


          {loading && (
            <Modal
              animationType="fade"
              transparent={true}
              onRequestClose={() => setLoading(false)}
            >
              <View style={styles.modalContainer}>
                  <ActivityIndicator size={50} color="#ffffff" />
              </View>
            </Modal>
          )}

          {/* </View> */}

        </View>
      </ScrollView>
    </SafeAreaView >
  )
}

export default HomeUser
