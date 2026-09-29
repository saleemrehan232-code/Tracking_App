import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Image, FlatList, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import CalenderIcon2 from '../components/CalenderIcon2';
import { Dropdown } from 'react-native-element-dropdown';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MessageIcon from '../components/MessageIcon';
import { Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import api from '../components/Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialTopTabNavigator();

const TasksAdmin = (props) => {
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const showDialog = () => {
        setIsDialogVisible(true);
    };
    const closeDialog = () => {
        setIsDialogVisible(false);
    };

    const dataDropdown = [
        { label: 'Select', value: 'Employ' },
        { label: 'Alix jonson', value: 'Alix jonson' },
        { label: 'Willam', value: 'Willam' },
        { label: 'Mark', value: 'Mark' },
    ];

    const [dropdownValue, setDropdownValue] = useState('Select');
    const [userData, setUserData] = useState(null);

    const navigation = useNavigation();
    // Function to navigate back
    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
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
    // const type = 'family';

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


    const renderItem = ({ item }) => {
        // Determine colors based on status
        let statusColor;
        if (item.status === 'Completed') {
            statusColor = '#16B8A4'; // Green
        } else if (item.status === 'Pending') {
            statusColor = '#FF5252'; // Red
        } else if (item.status === 'In Progress') {
            statusColor = '#0055A9'; // Blue
        } else {
            statusColor = '#0055A9';
        }

        const taskDateTime = `${item.date || 'N/A'} ${item.time || 'N/A'}`;

        return (
            <View style={[styles.taskMainContainer, { backgroundColor: statusColor }]}>
                <TouchableOpacity onPress={() => props.navigation.navigate('TaskDetailsAdmin')}>
                    <View style={styles.taskContainer}>
                        <View style={styles.textContainerTask}>
                            <Text style={[styles.titleTask2]}>{item.title}</Text>
                            <View style={[styles.bgMainRecordsInfos, { marginVertical: 5 }]}>
                                <CalenderIcon2 color={statusColor} />
                                <Text style={[styles.time3, { color: statusColor }]}>
                                    {taskDateTime}
                                </Text>
                            </View>
                            <Text style={styles.description}>{item.description1}</Text>
                        </View>
                        <View style={[styles.statusContainer, { backgroundColor: statusColor }]}>
                            <Text style={styles.statusText}>{item.status}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
                                <Text style={styles.textContentAdmin}>Tasks</Text>
                            </View>
                            <View style={[styles.viewFlexHeader]}></View>
                        </View>

                        <View style={[styles.searchRow]}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={showDialog}>
                                <View style={styles.search001Bg}>
                                    <Text style={styles.view001Margin}>Assign Task</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={styles.iconContainer}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('AllChatsAdmin')}>
                                    <MessageIcon />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={isDialogVisible}
                            onRequestClose={closeDialog}>

                            <View style={styles.dialogContainer}>
                                <View style={styles.dialogBox}>

                                    <TouchableOpacity onPress={closeDialog}>
                                        <BtnBack />
                                    </TouchableOpacity>

                                    <Text style={styles.headerDialog}>Asign Task</Text>

                                    <View style={styles.formGroup}>
                                        <Text style={styles.labelDialog}>Employee Name</Text>
                                        <View style={[styles.dropdownContainerList06, { marginTop: 5 }]}>
                                            <Dropdown
                                                placeholderStyle={styles.placeholderStyleList2}
                                                selectedTextStyle={styles.selectedTextStyleList2}
                                                data={dataDropdown}
                                                labelField="label"
                                                valueField="value"
                                                placeholder="Select Employe"
                                                value={dropdownValue}
                                                onChange={(item) => {
                                                    setDropdownValue(item.value);
                                                }}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.formGroup}>
                                        <Text style={styles.labelDialog}>Duration</Text>
                                        <View style={styles.leaveContainer}>
                                            {/* <TouchableOpacity style={{flex: 1}}> */}
                                            <TextInput style={styles.input2} placeholder="02/01/2024" />
                                            {/* </TouchableOpacity> */}
                                            {/* <TouchableOpacity style={styles.input3}> */}
                                            <TextInput style={styles.input3} placeholder="02/01/2024" />
                                            {/* </TouchableOpacity> */}
                                        </View>
                                    </View>

                                    <View style={styles.formGroup}>
                                        <Text style={styles.labelDialog}>Remarks</Text>
                                        <TextInput style={styles.input} placeholder="Hospitalized due to dengue" />
                                    </View>

                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={styles.acceptButton02} onPress={closeDialog}>
                                            <Text style={styles.buttonTextDialog}>Assign</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </Modal>

                        <View style={{ marginTop: 30, marginBottom: 80, marginHorizontal: 15 }}>
                            <FlatList
                                data={tasks}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={renderItem}
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

export default TasksAdmin;
