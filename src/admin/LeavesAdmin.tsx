import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Image, FlatList, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MessageIcon from '../components/MessageIcon';
import { Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import SearchIcon from '../components/SearchIcon';
import api from '../components/Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialTopTabNavigator();

const LeavesAdmin = (props) => {
    const [searchText, setSearchText] = useState("");
    const [leaves, setLeaves] = useState([]);
    const [filteredLeaves, setFilteredLeaves] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const [userData, setUserData] = useState(null);

    const navigation = useNavigation();
    // Function to navigate back
    const handleBackPress = () => {
        navigation.goBack();
    };

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
                id: userData.id,
                type: userData.type,
                text: userData.username,
                position: userData.position,
                image: userData.image ? { uri: userData.image } : require('../images/Profile.png')
            };
        }
        return {
            id: 'Id id null',
            text: 'Loading...',
            position: 'Position',
            type: 'tpye is empty',
            image: require('../images/Profile.png')
        };
    };

    // get data from Async Storage
    const { id, type, text, position, image } = getDisplayText();

    const [tasks, setTasks] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const fetchEmployees = async () => {
                setLoading(true);
                try {
                    console.log('Fetching tasks for employee type:', type);
                    const response = await api.get(`admin/task/getAll?employeeType=${type}`);
                    console.log('API Response:', response.data);

                    if (response.data?.status === 'success' && Array.isArray(response.data?.data)) {
                        setTasks(response.data.data);
                    } else {
                        console.warn(`No tasks found for employee type: ${type}`);
                        setTasks([]); // Clear tasks if no data
                    }
                } catch (error) {
                    console.error('Error fetching employee task data:', error.response?.data || error.message);
                }
                setLoading(false);
            };

            fetchEmployees();
        }, [type])
    );

    // Fetch data from API
    useEffect(() => {
        const fetchEmployees = async () => {
            setLoading(true);
            try {
                console.log("Fetching all employees...");
                const response = await api.get("admin/leave/getAll");
                console.log("API Response:", response.data);

                if (response?.data?.status === "success" && Array.isArray(response?.data?.data) && response.data.data.length > 0) {
                    setLeaves(response.data.data);
                    setFilteredLeaves(response.data.data); // Set both states
                } else {
                    console.warn("No data returned from the API.");
                    Alert.alert("No Data", "No data returned from the API.");
                    setLeaves([]);
                    setFilteredLeaves([]);
                }
            } catch (error) {
                console.error("Error fetching employee data:", error);
                Alert.alert("Error", "Failed to fetch employee data. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchEmployees();
    }, []);

    // Filter data based on search input
    useEffect(() => {
        if (searchText.trim() === "") {
            setFilteredLeaves(leaves);
        } else {
            const filtered = leaves.filter(item =>
                `${item.employeeId?.firstName} ${item.employeeId?.lastName}` // Adjust field as needed
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            );
            setFilteredLeaves(filtered);
        }
    }, [searchText, leaves]);

    const showDialog = (item) => {
        setSelectedEmployee(item);
        setIsDialogVisible(true);
    };

    const closeDialog = () => {
        setIsDialogVisible(false);
        setSelectedEmployee(null);
    };

    const handleApiCall = async (action) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            closeDialog();
            alert(`Leave request ${action === 'accept' ? 'approved' : 'rejected'}.`);
        }, 2000);
    };

    const renderLeaves = ({ item }) => {

        const { employeeId } = item;

        let statusColor;
        if (item.status === 'approved') {
            statusColor = '#16B8A4'; // Green
        } else if (item.status === 'rejected') {
            statusColor = '#FF5252'; // Red
        } else if (item.status === 'pending') {
            statusColor = '#4F94F8'; // pending
        }

        return (
            <View style={[styles.taskMainContainer, { backgroundColor: statusColor }]}>
                {/* <TouchableOpacity
                    onPress={async () => {
                        setLoading(true);
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        setLoading(false);
                        showDialog(item);
                    }}          
                > */}
                <View style={styles.taskContainer}>
                    {/* <Image source={{ uri: employeeId.image }} style={styles.profileImagesHomes} /> */}
                    {employeeId?.image && (
                        <Image source={{ uri: employeeId.image }} style={styles.profileImagesHomes} />
                    )}
                    <View style={styles.textContainersHomes}>
                        <Text style={styles.titleTask2}>
                            {employeeId?.firstName ?? ''} {employeeId?.lastName ?? ''}
                        </Text>
                        <Text style={styles.bgMainRecordsInfos}>
                            {item?.leaveStart ?? ''}
                        </Text>
                        <Text style={styles.description}>
                            {item?.remarks ?? ''}
                        </Text>
                    </View>
                    <View style={[styles.statusContainer02, { backgroundColor: statusColor }]}>
                        <Text style={styles.statusText}>
                            {item?.status ?? ''}
                        </Text>
                    </View>

                </View>
                {/* </TouchableOpacity> */}

                <Modal
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
        <SafeAreaView style={styles.bgSafeAreaViews}>
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
                                <Text style={styles.textContentAdmin}>Leaves</Text>
                            </View>
                            <View style={[styles.viewFlexHeader]}></View>
                        </View>

                        <View style={[styles.searchRow]}>
                            <View style={styles.search001Bg}>
                                <SearchIcon />
                                <TextInput
                                    placeholder="Search"
                                    placeholderTextColor="white"
                                    style={styles.view02Margin}
                                    value={searchText}
                                    onChangeText={setSearchText}
                                />
                            </View>
                            <View style={styles.iconContainer}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('AllChatsAdmin')}>
                                    <MessageIcon />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ marginTop: 30, marginBottom: 80, marginHorizontal: 15 }}>
                            <FlatList
                                data={filteredLeaves}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={renderLeaves}
                                showsVerticalScrollIndicator={false}
                                ListEmptyComponent={<Text style={[styles.emptyText02, { marginTop: 50 }]}>No Record Found</Text>}
                            />
                        </View>

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

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LeavesAdmin;
