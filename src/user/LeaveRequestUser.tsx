import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import api from '../components/Urls';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const LeaveRequestUser = () => {
  const dataDropdown = [
    { label: 'Urgent', value: 'Urgent' },
    { label: 'Tomorrow', value: 'Tomorrow' },
    { label: 'Other', value: 'Other' },
  ];

  const [leaveStart, setLeaveStart] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // Format the date as per your preference (e.g., DD/MM/YYYY)
    const formattedDate = date.toLocaleDateString();
    setLeaveStart(formattedDate);
    hideDatePicker();
  };


  const [dropdownValue, setDropdownValue] = useState('');
  // const [leaveStart, setLeaveStart] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const showDialog = () => {
    setIsDialogVisible(true);
  };

  const closeDialog = () => {
    setIsDialogVisible(false);
    navigation.navigate('Home'); // Replace 'Home' with your home screen name
  };

  const validateFields = () => {
    if (!dropdownValue) {
      Alert.alert('Validation Error', 'Please select a leave type.');
      return false;
    }
    if (!leaveStart) {
      Alert.alert('Validation Error', 'Please enter a start date for your leave.');
      return false;
    }
    if (!remarks) {
      Alert.alert('Validation Error', 'Please enter remarks.');
      return false;
    }
    return true;
  };

  const applyLeave = async () => {
    if (!validateFields()) return;

    setLoading(true); // Show loading modal
    try {
      const response = await api.post('employee/leave/addRecord', {
        applicationType: dropdownValue,
        leaveStart: leaveStart,
        remarks: remarks,
      });

      if (response?.status === 200 && response?.data?.success) {
        setLoading(false); // Hide loading modal
        showDialog();
      } else {
        setLoading(false); // Hide loading modal
        Alert.alert(
          'Error',
          response?.data?.message || 'Something went wrong. Please try again.'
        );
      }
    } catch (error) {
      setLoading(false); // Hide loading modal
      console.error('API Error:', error);
      Alert.alert('Error', 'Failed to apply for leave. Please try again.');
    }
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
              <View style={styles.viewFlexCenter}>
                <Text style={styles.textContentAdmin}>Leave Request</Text>
              </View>
              <View style={styles.viewFlexHeader}></View>
            </View>
          </View>

          <View style={[styles.leaveRequestBox03, { marginTop: 10 }]}>
            <View style={styles.formGroup}>
              <Text style={styles.labelDialog}>Leave Type</Text>
              <View style={[styles.dropdownContainerList05, { marginTop: 5 }]}>
                <Dropdown
                  placeholderStyle={styles.placeholderStyleList2}
                  selectedTextStyle={styles.selectedTextStyleList2}
                  data={dataDropdown}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Type"
                  value={dropdownValue}
                  onChange={(item) => setDropdownValue(item.value)}
                />
              </View>
            </View>

            {/* <View style={styles.formGroup}>
              <Text style={styles.labelDialog}>Leave Start</Text>
              <View style={styles.leaveContainer}>
                <TextInput
                  style={styles.input5}
                  placeholder="Enter Start Date"
                  value={leaveStart}
                  onChangeText={setLeaveStart}
                />
              </View>
            </View> */}


            <View style={styles.formGroup}>
              <Text style={styles.labelDialog}>Leave Start</Text>
              <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.buttonText}>Select Start Date</Text>
      </TouchableOpacity>

      {/* DateTimePicker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {leaveStart ? (
        <Text style={styles.selectedDate}>Selected Date: {leaveStart}</Text>
      ) : null}
    </View>

            <View style={styles.formGroup}>
              <Text style={styles.labelDialog}>Remarks</Text>
              <TextInput
                style={[styles.input4, { minHeight: 100, textAlignVertical: 'top' }]}
                placeholder="Enter Remarks"
                value={remarks}
                onChangeText={setRemarks}
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.acceptButton02} onPress={applyLeave}>
                <Text style={styles.buttonTextDialog}>Apply</Text>
              </TouchableOpacity>
            </View>

            {/* Loading Modal */}
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

            {/* Success Dialog */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={isDialogVisible}
              onRequestClose={closeDialog}
            >
              <View style={styles.dialogContainer}>
                <View style={styles.dialogBox}>
                  <Text style={styles.headerDialog03}>Leave Applied Successfully</Text>
                  <Text style={styles.headerDialog02}>
                    For further inquiry, please join the chat.
                  </Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.acceptButton02} onPress={closeDialog}>
                      <Text style={styles.buttonTextDialog}>Return to Home</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeaveRequestUser;
