import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Image, FlatList, TouchableOpacity, ScrollView, Modal, ActivityIndicator } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import SearchIcon from '../components/SearchIcon';
import CheckInIcon from '../components/CheckInIcon';
import LeavesIcon from '../components/LeavesIcon';
import MessageIcon from '../components/MessageIcon';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import api from '../components/Urls';

const MonthlyRecordAdmin = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const { id } = route.params;
  
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      setLoading(true); // Start loading before fetching data
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
        setLoading(false); // Stop loading after data is fetched
      }
    };
    fetchAttendanceData();
  }, [id]);

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

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); 
  };

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const showDialog = () => {
    setIsDialogVisible(true);
  };

  const closeDialog = () => {
    setIsDialogVisible(false);
  };

  const onDateSelect = (date) => {
    setSelectedDate(date);
    closeDialog();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.containerHome}>
          <Image source={require('../images/HomeBg4.jpeg')} style={styles.image3Home} />

          <View style={styles.overlay}>
            <View style={styles.bgMainHome}>
              <View style={styles.viewFlexHeader}>
                <TouchableOpacity onPress={handleBackPress}>
                  <BtnBack />
                </TouchableOpacity>
              </View>
              <View style={[styles.viewFlexCenter]}>
                <Text style={styles.textContentAdmin}>Monthly Records</Text>
              </View>
              <View style={[styles.viewFlexHeader]}></View>
            </View>
            <View style={[styles.searchRow]}>
              <View style={styles.search001Bg}>
                <SearchIcon />
                <TextInput placeholder="Search" placeholderTextColor="white" style={styles.view02Margin} />
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ChatsAdmin')}>
                  <MessageIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.containerDialog, { marginBottom: 0 }]}>
            <View style={styles.formGroup}>
              <View style={styles.leaveContainer02}>
                <View style={styles.leaveContainer03}>
                  <Text style={styles.labelDialog}>Start Date</Text>
                </View>
                <View style={[styles.leaveContainer03, { marginStart: 10 }]}>
                  <Text style={styles.labelDialog}>End Date</Text>
                </View>
              </View>
              <View style={styles.leaveContainer}>
                <TouchableOpacity style={{ flex: 1 }} onPress={showDialog}>
                  <Text style={[styles.input5, { backgroundColor: '#ffffff' }]}>02/01/2024</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }} onPress={showDialog}>
                  <Text style={[styles.input6, { backgroundColor: '#ffffff' }]}>02/02/2024</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.acceptButton02}>
                  <Text style={styles.buttonTextDialog}>Calculate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isDialogVisible}
            onRequestClose={closeDialog}>
            <View style={styles.dialogContainer}>
              <View style={styles.dialogBox}>
                <Calendar onDayPress={(day) => onDateSelect(day.dateString)} />
              </View>
            </View>
          </Modal>

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
                <View style={styles.modalContent2}>
                  <ActivityIndicator size="large" color="#9B9B9B" />
                  <Text style={styles.modalText}>Loading...</Text>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MonthlyRecordAdmin;
