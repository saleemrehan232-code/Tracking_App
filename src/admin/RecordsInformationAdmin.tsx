import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import NotesIcon from '../components/NotesIcon';
import LeavesIcon from '../components/LeavesIcon';
import RateIcon from '../components/RateIcon';
import CheckInIcon from '../components/CheckInIcon';
import CheckOutIcon from '../components/CheckOutIcon';
import MessageIcon from '../components/MessageIcon';
import TaskBarChart from '../components/TaskBarChart';
import { Dropdown } from 'react-native-element-dropdown';
import InfoIcon2 from '../components/InfoIcon2';
import BlueCalender from '../components/BlueCalender';
import { useNavigation } from '@react-navigation/native';
import api from '../components/Urls';
import { Modal } from 'react-native';
import { ActivityIndicator } from 'react-native';

const RecordsInformationAdmin = ({ props, route }) => {
  const navigation = useNavigation();

  const { employeeData } = route.params;

  const [employes, setEmployes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [remarks, setRemarks] = useState('');
  const [hourlyRate, setHourlyRate] = useState(null);

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    setCurrentDate(`Dated ${day}/${month}/${year}`);
  }, []);

  useEffect(() => {
    if (employeeData && employeeData.id) {
      fetchEmployees(employeeData.id);
    } else {
      console.error("Employee position is not provided.");
    }
  }, [employeeData]);

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

        const checkIn = response.data.data.report[0].checkInTime;
        const checkOut = response.data.data.report[0].checkOutTime;

        const remarks = response.data.data.report[0].remarks;

        // Update the remarks state
        setRemarks(remarks || 'No remarks available');

        // Convert timestamps to readable format
        setCheckInTime(checkIn ? new Date(checkIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : '00:00');
        setCheckOutTime(checkOut ? new Date(checkOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : '00:00');

      } else {
        console.log('No employee data found.');
        setEmployes([]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching employee data:', error);
      setRemarks('No remarks available');
      setLoading(false);
    }
  };

  const dataDropdown = [
    { label: 'Today', value: 'Today' },
    { label: 'Yesterday', value: 'Yesterday' },
    { label: 'Tomorrow', value: 'Tomorrow' },
  ];

  const [dropdownValue, setDropdownValue] = useState('Select');

  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      if (!employeeData || !employeeData.id) {
        console.error("Employee ID is not provided.");
        return;
      }

      const employeeId = employeeData.id;
      const currentDate = new Date();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      try {
        const response = await api.get(`admin/attendance/monthlyReport?month=${month}&year=${year}&employeeId=${employeeId}`);
        console.log('API Response:', response.data);

        if (response.data.status === 'success') {
          setReportData(response.data.data);
        } else {
          console.error('Failed to fetch data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendanceData();
  }, [employeeData]);

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


  const data = [
    {
      id: '1',
      title: 'Personal Leave',
      date: 'March 25 - 12:00 PM',
      description: 'Hospitalized due to dengue',
    },
    {
      id: '2',
      title: 'Annual Leave',
      date: 'April 5 - 9:00 AM',
      description: 'Family vacation trip',
    },
    // Add more data as needed
  ];

  const renderData = ({ item }) => (
    <View style={styles.task3MainContainer}>
      <View style={styles.taskContainer}>
        <View style={styles.textContainerTask}>
          <Text style={styles.titleTask2}>{item.title}</Text>
          <View style={[styles.bgMainRecordsInfos, { marginVertical: 5 }]}>
            <BlueCalender />
            <Text style={styles.time3}>{item.date}</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.statusContainer}>
          <InfoIcon2 />
        </View>
      </View>
    </View>
  );

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
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
                {/* <Text style={styles.textContentAdmin}>Madelyn Vaccaro</Text> */}
                <Text style={styles.textContentAdmin}>{`${employeeData.firstName} ${employeeData.lastName}`}</Text>

              </View>
              <View style={[styles.viewFlexHeader]}></View>
            </View>
            <View style={[styles.searchRow]}>

              {/* <TouchableOpacity onPress={() => navigation.navigate('MonthlyRecordAdmin')} style={{ flex: 1 }}>
                <View style={styles.search001Bg}>
                  <Text style={styles.view001Margin}>Monthly Record</Text>
                </View>
              </TouchableOpacity> */}

              <TouchableOpacity
                onPress={() => navigation.navigate('MonthlyRecordAdmin', { id: employeeData.id })}
                style={{ flex: 1 }}
              >
                <View style={styles.search001Bg}>
                  <Text style={styles.view001Margin}>Monthly Record</Text>
                </View>
              </TouchableOpacity>



              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ChatsAdmin')}>
                  <MessageIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.bgMainRecords}>
            <View>
              <Text style={styles.titlePersonal}>Personal Information</Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Onboarding2')}
            >
              <Text style={styles.btnEdit}>Edit</Text>
            </TouchableOpacity>
          </View>


          <View style={[styles.card02, styles.bgInofoRecords]}>

            <View style={styles.employeeHeader}>
              <Image source={{ uri: employeeData.image }} style={styles.avatar} />
              <View>
                <Text style={styles.namePersonal}>{`${employeeData.firstName} ${employeeData.lastName}`}</Text>
                <Text style={styles.positionPersonal}>{`${employeeData.position}`}</Text>
              </View>
            </View>

            <View style={styles.viewBgPersonal}>

              <View style={styles.infoRow}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{`${employeeData.email}`}</Text>
                <Text style={styles.label}>Joined</Text>
                <Text style={styles.value}>25 May 2020</Text>
              </View>

              <View style={[styles.infoRow, { flex: 1 }]}>
                <Text style={styles.label}>Phone</Text>
                <Text style={styles.value}>{`${employeeData.phone}`}</Text>
                <Text style={styles.label}>Address</Text>
                <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">{`${employeeData.address}`}</Text>
              </View>
            </View>

          </View>

          {/* Notes Section */}
          <View style={[styles.card02, styles.bgInofoRecords]}>

            <View style={[styles.bgMainRecordsInfos, { marginTop: -20 }]}>
              <View style={styles.btnNextAdmin}>
                <NotesIcon style={styles.iconByNotes} />
              </View>
              <View>
                <Text style={styles.sectionTitle}>Notes by Employee</Text>
                <Text style={styles.noteDate}>{currentDate}</Text>
              </View>
              <View>
              </View>
            </View>
            <Text style={styles.notes}>{remarks}</Text>
          </View>

          <View style={styles.viewMargins}>
            <View style={styles.row}>
              <View style={styles.bgStatusChecked}>
                <View>
                  {/* <Text style={styles.dataTitle}>08:45 AM</Text> */}
                  <Text style={styles.dataTitle}>{checkInTime || "00:00"}</Text>
                  <Text style={styles.dataLabel}>Checked In</Text>
                </View>
                <View>
                  <CheckInIcon />
                </View>
              </View>
              <View style={styles.bgStatusChecked}>
                {/* <View>
                  <Text style={styles.dataTitle}>08:45 AM</Text>
                  <Text style={styles.dataLabel}>Checked In</Text>
                </View> */}
                <View>
                  {/* <Text style={styles.dataTitle}>08:45 AM</Text> */}
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
                  <Text style={styles.dataTitle}>0</Text>
                  <Text style={styles.dataLabel}>Total Leaves</Text>
                </View>
                <View>
                  <LeavesIcon />
                </View>
              </View>
              <View style={styles.bgStatusChecked}>
                <View>
                  {/* <Text style={styles.dataTitle}>{data.hourlyRate}</Text> */}
                  <Text style={styles.dataTitle}>{hourlyRate ? `$${hourlyRate}` : "0"}</Text>
                  <Text style={styles.dataLabel}>Hourly Rate</Text>
                </View>
                <View>
                  <RateIcon />
                </View>
              </View>
            </View>

          </View>

          {/* Working Hours Section */}
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


          <View style={[styles.headerRow, { marginHorizontal: 20 }]}>
            <Text style={styles.sectionTitle}>Today's Tasks</Text>
            <Text style={styles.seeMore}>See More</Text>
          </View>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          {/* Recent Activity */}
          <View style={[styles.headerRow, { marginHorizontal: 20 }]}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <Text style={styles.seeMore}>See More</Text>
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
              onRequestClose={() => setLoading(false)}
            >
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

export default RecordsInformationAdmin;
