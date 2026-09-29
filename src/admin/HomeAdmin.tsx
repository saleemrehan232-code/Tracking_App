import { View, Text, SafeAreaView, ScrollView, FlatList, TextInput, Alert } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { Image } from 'react-native'
import { styles } from '../screens/StyleSheet'
import RecordIcon from '../components/RecordIcon'
import AddIcon from '../components/AddIcon'
import ChatIcon from '../components/ChatIcon'
import { TouchableOpacity } from 'react-native'
import InfoIcon from '../components/InfoIcon'
import InfoIcon2 from '../components/InfoIcon2'
import { Modal } from 'react-native'
import BtnBack from '../components/BtnBack'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoutIcon from '../components/LogoutIcon'
import { ActivityIndicator } from 'react-native'
import api from '../components/Urls'

const HomeAdmin = (props) => {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(true);

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

  const confirmLogout = () => {
    Alert.alert(
      'Logout', // Title
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
      // Clear user data from AsyncStorage or any other storage
      await AsyncStorage.removeItem('userData'); // Example to remove stored user data

      // Navigate to Onboarding1 after logout
      navigation.replace('SelectDepartment');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const getDisplayText = () => {
    if (userData) {
      if (userData.type === 'imed') {
        return {
          text: 'iMed Urgent Care',
          image: require('../images/logo2.png')
        };
      } else if (userData.type === 'family') {
        return {
          text: 'Family Urgent Care',
          image: require('../images/FamilyLogo.png')
        };
      }
      return {
        text: 'Unknown Care',
        // type: 'Unknown Care',
        image: require('../images/Profile.png')
      };
    }
    return {
      text: 'Loading...',
      // type: 'Loading...',
      image: require('../images/Profile.png')
    };
  };

  const { text, image } = getDisplayText();

  const getId = () => {
    if (userData) {
      return {
        type: userData.type,
        id: userData.id,
      };
    }
    return {
      type: 'tpye is empty',
      id: 'Unknown Care',
    };
  };
  const { type, id } = getId();

  useFocusEffect(
    useCallback(() => {
      const fetchEmployees = async () => {
        if (!type) {
          console.error("Error: 'type' is undefined or empty");
          return;
        }

        setLoading(true);
        try {
          const currentDate = new Date().toISOString().split('T')[0];
          console.log('Fetching employees for type:', type);
          const response = await api.get(`admin/attendance/employeesReport?date=${currentDate}&type=${type}`);

          console.log('API Response:', response.data);

          if (response.data.status === 'success' && response.data.data.length > 0) {
            setEmployees(response.data.data);
          } else {
            console.warn('No data returned from the API for the given type.');
          }
        } catch (error) {
          console.error('Error fetching employee data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchEmployees();

      return () => {
        setEmployees([]); // Clear the employees list when leaving the screen
      };
    }, [type]) // Only re-run this effect if 'type' changes
  );

  const renderEmployee = ({ item }) => {
    const { employeeId, checkInTime } = item;

    // Format checkInTime to a readable time format
    const formattedCheckInTime = checkInTime
      ? new Date(checkInTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      : 'N/A';

    return (
      <View style={{ paddingHorizontal: 15 }}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('RecordsInformationAdmin', { employeeData: item })}> */}

        <View style={styles.tabsBgsContainer}>
          <View style={styles.imagesRadiusBg03}>
            {employeeId && employeeId.id && employeeId.id.trim() !== '' ? (
              <Image source={{ uri: employeeId.image }} style={styles.avatar} />
            ) : (
              <Image source={require('../images/Profile.png')} style={styles.avatar} />
            )}
          </View>

          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Text style={[styles.nameRecord, { fontFamily: 'semibold', fontSize: 14 }]} numberOfLines={1} ellipsizeMode="tail">
              {`${employeeId.firstName} ${employeeId.lastName}`}
            </Text>
            <Text style={[styles.position, { marginTop: 3, fontSize: 12 }]} numberOfLines={1} ellipsizeMode="tail">
              {employeeId.position}
            </Text>
          </View>

          <View style={styles.infoStatus02}>
            <Text style={[styles.position, { color: '#E40000', marginEnd: 10, fontSize: 12 }]}>
              Entry at {formattedCheckInTime}
            </Text>
            <InfoIcon2 />
          </View>

        </View>
        {/* </TouchableOpacity> */}
      </View>
    );
  };

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  // Leaves Request
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        console.log('Fetching all employees...');
        const response = await api.get(`admin/leave/getAll`);
        console.log('API Response:', response.data);

        if (response?.data?.status === 'success' && Array.isArray(response?.data?.data) && response.data.data.length > 0) {
          setLeaves(response.data.data);
        } else {
          console.warn('No data returned from the API.');
          Alert.alert('No Data', 'No data returned from the API.');
          setLeaves([]);
        }
      } catch (error) {
        console.error('Error fetching employee data:', error);
        Alert.alert('Error', 'Failed to fetch employee data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const renderLeaves = ({ item }) => {
    const { employeeId } = item;

    const showDialog = () => {
      setSelectedEmployee(item); // Store the clicked employee's data
      setIsDialogVisible(true);
    };

    const closeDialog = () => {
      setIsDialogVisible(false);
      setSelectedEmployee(null); // Clear the selected employee data
    };

    const handleApiCall = async (action) => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        closeDialog();
        alert(`Leave request ${action === 'accept' ? 'approved' : 'rejected'}.`);
      }, 2000);
    };

    return (
      <View style={styles.cardsHomes03}>
        <View style={styles.cardHeader}>
          <Image source={{ uri: employeeId.image }} style={styles.profileImagesHomes} />
          <View style={styles.textContainersHomes}>
            <Text style={styles.nameText}>{employeeId.firstName} {employeeId.lastName}</Text>
            <Text style={styles.roleText}>{employeeId.position}</Text>
            <Text style={styles.leaveText}>{item.remarks}</Text>
          </View>
          <TouchableOpacity style={styles.infoIconContainer02}>
            <InfoIcon />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.approveButtonsHomes}
          onPress={async () => {
            setLoading(true); // Show loading modal
            await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate loading delay
            setLoading(false); // Hide loading modal
            showDialog(); // Open the dialog
          }}
        >
          <Text style={styles.approveButtonsHomes02}>Approve</Text>
        </TouchableOpacity>


        <Modal
          // animationType="slide"
          transparent={true}
          visible={isDialogVisible}
          onRequestClose={closeDialog}
        >
          <View style={styles.dialogContainer}>
            <View style={styles.dialogBox}>
              <TouchableOpacity onPress={closeDialog}>
                <BtnBack />
              </TouchableOpacity>

              <Text style={styles.headerDialog}>Leave Request</Text>

              {selectedEmployee && (
                <>
                  <View style={styles.formGroup}>
                    <Text style={styles.labelDialog}>Employee Name</Text>
                    <TextInput
                      style={styles.input}
                      value={`${selectedEmployee.employeeId.firstName}${selectedEmployee.employeeId.lastName}`}
                      editable={false}
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.labelDialog}>Application Type</Text>
                    <TextInput
                      style={styles.input}
                      value={selectedEmployee.applicationType || 'N/A'}
                      editable={false}
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.labelDialog}>Leave</Text>
                    <View style={styles.leaveContainer}>
                      <TextInput
                        style={styles.input2}
                        value={selectedEmployee.leaveStart || '0000-00-00'}
                        editable={false}
                      />
                      <TextInput
                        style={styles.input3}
                        value={selectedEmployee.leaveEnd || '0000-00-00'}
                        editable={false}
                      />
                    </View>
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.labelDialog}>Remarks</Text>
                    <TextInput
                      style={styles.input}
                      value={selectedEmployee.remarks || 'N/A'}
                      editable={false}
                    />
                  </View>

                  {/* <View style={styles.formGroup}>
                    <Text style={styles.labelDialog}>Attachment</Text>
                    <View style={styles.attachmentContainer}>
                      <Text style={styles.attachmentText}>
                        {selectedEmployee.attachment || 'No attachment'}
                      </Text>
                      <TouchableOpacity>
                        <DownloadIcon />
                      </TouchableOpacity>
                    </View>
                  </View> */}
                </>
              )}

              <View style={styles.buttonContainer02}>
                <TouchableOpacity
                  style={styles.acceptButton}
                  onPress={() => handleApiCall('accept')}
                >
                  <Text style={styles.buttonTextDialog}>Accept</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.rejectButton}
                  onPress={() => handleApiCall('reject')}
                >
                  <Text style={styles.buttonTextDialog}>Reject</Text>
                </TouchableOpacity>
              </View>

              <Modal
                animationType="fade"
                transparent={true}
                visible={loading}
                onRequestClose={() => setLoading(false)}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent2}>
                    <ActivityIndicator size="large" color="#9B9B9B" />
                    <Text style={styles.modalText}>Loading...</Text>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </Modal>
      </View>
    );
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View style={styles.containerHome}>

          <Image source={require('../images/HomeBg.jpeg')} style={styles.image4Home} />

          <View style={styles.overlay}>

            <View style={styles.bgMainsHome02}>

              <View style={styles.btnNextAdmin}>
                <Image source={image} style={styles.logoHome02} />
              </View>

              <View style={{ flex: 1, marginHorizontal: 10 }}>
                <Text style={styles.textsContentsAdmins}>{text}</Text>
                <Text style={styles.text2ContentsAdmins}>Dashboard</Text>
              </View>

              <View style={styles.btnNextAdmin}>
                <TouchableOpacity onPress={confirmLogout}>
                  <LogoutIcon />
                </TouchableOpacity>
              </View>

            </View>

          </View>

          {/* <View style={styles.dropdownContainerList2}>
              <Dropdown
                placeholderStyle={styles.placeholderStyleList}
                selectedTextStyle={styles.selectedTextStyleList}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="iMED Urgent Care"
                value={dropdownValue}
                onChange={(item) => {
                  setDropdownValue(item.value);
                }}
              />
            </View> */}

          <View style={styles.viewOptionsBgs02}>

            <TouchableOpacity onPress={() => props.navigation.navigate('RecordsAdmin')}>
              <View style={styles.viewOptions}>
                <Image source={require('../images/ImageBg.png')} style={styles.backgroundImageHome} />
                <View style={styles.overlayContent}>
                  <RecordIcon style={styles.imgCenter} />
                  <Text style={styles.textOptionHome}>Records</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('AllChatsAdmin')}>
              <View style={styles.viewOptions}>
                <Image source={require('../images/ImageBg.png')} style={styles.backgroundImageHome} />
                <View style={styles.overlayContent}>
                  <ChatIcon style={styles.imgCenter} />
                  <Text style={styles.textOptionHome}>Chats</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('AddEmployeAdmin')}>
              <View style={styles.viewOptions}>
                <Image source={require('../images/ImageBg.png')} style={styles.backgroundImageHome} />
                <View style={styles.overlayContent}>
                  <AddIcon style={styles.imgCenter} />
                  <Text style={styles.textOptionHome}>Add</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('EmployeAdmin')}>
              <View style={styles.viewOptions}>
                <Image source={require('../images/ImageBg.png')} style={styles.backgroundImageHome} />
                <View style={styles.overlayContent}>
                  <AddIcon style={styles.imgCenter} />
                  <Text style={styles.textOptionHome}>Employe</Text>
                </View>
              </View>
            </TouchableOpacity>

          </View>

          <Text style={styles.textTitleAdmin03}>Leave Requests</Text>

          <View>
            {/* <FlatList
              data={leaveRequests}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <LeaveRequestCard item={item} />}
              contentContainerStyle={styles.listContentsHomes}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            /> */}

            <FlatList
              data={leaves}
              keyExtractor={(item) => item.id}
              renderItem={renderLeaves}
              horizontal={true}
              contentContainerStyle={styles.listContentsHomes}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={<Text style={styles.emptyText}>No Record Found.</Text>}
            />

            {/* <FlatList
              data={leaves}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderEmployee}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<Text style={styles.emptyText}>No Record Found.</Text>}
            /> */}

          </View>

          <Text style={styles.textTitleAdmin02}>Attendence</Text>

          {/* <FlatList
            data={entryData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <AttendanceCard item={item} />}
            contentContainerStyle={styles.listContent}
          /> */}

          <FlatList
            data={employees}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderEmployee}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={<Text style={styles.emptyText02}>No Record Found</Text>}
          />

          {/* Loading Modal */}
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

          {/* </View> */}

        </View>

      </ScrollView>
    </SafeAreaView >
  )
}

export default HomeAdmin