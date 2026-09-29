import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Modal, ActivityIndicator, Image, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../components/Urls';
import InfoIcon2 from '../components/InfoIcon2';  // Assuming you have this component
import { styles } from '../screens/StyleSheet';
import { SafeAreaView } from 'react-native';

const EmployeeAttendanceScreen = (props) => {
    const [employees, setEmployees] = useState([]);  // State to store employee data
    const [loading, setLoading] = useState(false);    // State to control the loading modal
    const [userId, setUserId] = useState('670d11c357b057c32de49dfa');  // Example user ID (fetch from AsyncStorage or props)

    useEffect(() => {
        fetchEmployees(userId);
    }, []);

    const fetchEmployees = async (userId) => {
        try {
            setLoading(true);  // Set loading state to true while fetching

            // Make the API call to get the attendance data
            const response = await api.get(`employee/attendance/employeeReport/670506900a21e5c2e0e06756`);
            console.log('API Response:', response.data);  // Log the API response

            if (response.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
                // Directly set the data from the API response
                setEmployees(response.data.data);
            } else {
                console.log('No employee data found.');
                setEmployees([]);  // Empty array if no data is found
            }

            setLoading(false);  // Stop the loading state after data is fetched
        } catch (error) {
            console.error('Error fetching employee data:', error);
            setLoading(false);  // Stop the loading state if there’s an error
        }
    };

    const renderEmployee = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate('RecordsInformation')}>
                    <View style={styles.tabsBgsContainer}>
                        {/* <View style={styles.imageRadiusBg}>
                            <Image source={require('../images/Profile.png')} style={styles.avatar} />
                        </View> */}
                        <View>
                            <View style={styles.bgMainRecordsInfos}>
                                <Text style={styles.positions02}>Check In:</Text>
                                <Text style={styles.nameRecord}>{item.checkInTime}</Text>
                            </View>
                            <View style={styles.bgMainRecordsInfos}>
                                <Text style={styles.positions02}>Check Out:</Text>
                                <Text style={styles.nameRecord}>{item.checkOutTime}</Text>
                            </View>
                            {/* <View style={styles.bgMainRecordsInfos}>
                                <Text style={styles.positions02}>Id:</Text>
                                <Text style={styles.position}>{item.id}</Text>
                            </View> */}
                            {/* <Text style={styles.nameRecord}>{item.checkInTime}</Text>
                            <Text style={styles.position}>{item.id}</Text> */}
                        </View>
                        <View style={styles.infoStatus}>
                            <InfoIcon2 style={styles.iconMargin} />
                            <Text style={[styles.status, item.status === 'active' ? styles.present : styles.absent]}>
                                {item.status}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container2RecordsTabs}>
                <View style={{ marginTop: 20 }}></View>
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

                {/* Employee List */}
                <FlatList
                    data={employees}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderEmployee}
                />
            </View>

        </SafeAreaView>
    );
};

export default EmployeeAttendanceScreen;
