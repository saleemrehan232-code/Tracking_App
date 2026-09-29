import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Modal, ActivityIndicator, Alert } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import { useNavigation } from '@react-navigation/native';
import api from '../components/Urls';
import DeleteIcon from '../components/DeleteIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmployeAdmin = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(true);

    const navigation = useNavigation();

    const [userData, setUserData] = useState(null);

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

    const getId = () => {
        if (userData) {
            return {
                type: userData.type,
            };
        }
        return {
            type: 'tpye is empty',
        };
    };

    const { type } = getId();

    useEffect(() => {
        const fetchEmployees = async () => {
            // Fetch type and make sure it's set before API call
            if (!type) {
                console.error("Error: 'type' is undefined or empty");
                return; // Exit if type is invalid
            }

            setLoading(true);
            try {
                console.log('Fetching employees for type:', type);
                const response = await api.get(`admin/employee/getAll?type=${type}`);
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

        if (type) {
            fetchEmployees();
        }
    }, [type]);




    // Handle delete action with confirmation dialog
    const handleDelete = (recordId) => {
        console.log('Delete Id:', recordId);

        // Show a confirmation alert
        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete this record?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: async () => {
                        setLoading(true); // Show loading indicator before making the request
                        try {
                            const response = await api.post('/admin/employee/deleteById', {
                                recordId: recordId  // Send recordId as a JSON field
                            });

                            const responseData = response.data;  // Access the response data

                            console.log('API Response:', response);
                            console.log('API Response Data:', responseData);

                            if (responseData.status === 'success') {
                                // Remove the deleted employee from the list
                                setEmployees((prevEmployees) =>
                                    prevEmployees.filter((employee) => employee.id !== recordId)
                                );
                                Alert.alert("Success", "Employee deleted successfully");
                            } else {
                                Alert.alert("Error", responseData.message || "Failed to delete the employee");
                            }
                        } catch (error) {
                            console.error('Error deleting employee:', error);
                            Alert.alert("Error", "Failed to delete the employee");
                        } finally {
                            setLoading(false); // Hide loading indicator once the response is received
                        }
                    }
                }
            ],
            { cancelable: false }
        );
    };


    // Render each employee item
    const renderEmployee = ({ item }) => {
        return (
            <View>
                <View style={styles.tabsBgsContainerEmploye}>

                    {/* <View style={styles.imageRadiusBg} style={{flex: 1}}> */}
                    {item.id && item.id.trim() !== '' ? (
                        <Image source={{ uri: item.image }} style={styles.avatar} />
                    ) : (
                        <Image source={require('../images/Profile.png')} style={styles.avatar} />
                    )}


                    {/* </View> */}

                    <View style={{ flex: 1 }}>
                        <View style={styles.bgMainRecordsInfos}>
                            <Text style={styles.positions02}>Name:</Text>
                            <Text style={styles.nameRecord} numberOfLines={1} ellipsizeMode="tail">{`${item.firstName} ${item.lastName}`}</Text>
                        </View>
                        <View style={styles.bgMainRecordsInfos}>
                            <Text style={styles.positions02}>UserName:</Text>
                            <Text style={styles.position} numberOfLines={1} ellipsizeMode="tail">{item.username}</Text>
                        </View>
                        <View style={styles.bgMainRecordsInfos}>
                            <Text style={styles.positions02}>Department:</Text>
                            <Text style={styles.position} numberOfLines={1} ellipsizeMode="tail">{item.department}</Text>
                        </View>
                        <View style={styles.bgMainRecordsInfos}>
                            <Text style={styles.positions02}>Position:</Text>
                            <Text style={styles.position} numberOfLines={1} ellipsizeMode="tail">{item.position}</Text>
                        </View>
                        <View style={styles.bgMainRecordsInfos}>
                            <Text style={styles.positions02}>Phone:</Text>
                            <Text style={styles.position} numberOfLines={1} ellipsizeMode="tail">{item.phone}</Text>
                        </View>
                        <View style={styles.bgMainRecordsInfos}>
                            <Text style={styles.positions02}>Practice:</Text>
                            <Text style={styles.position} numberOfLines={1} ellipsizeMode="tail">{item.type}</Text>
                        </View>
                        <View style={styles.bgMainRecordsInfos}>
                            <Text style={styles.positions02}>Email:</Text>
                            <Text style={styles.position} numberOfLines={1} ellipsizeMode="tail">{item.email}</Text>
                        </View>
                    </View>
                    <View style={[styles.infoStatus, { marginBottom: 120, marginEnd: 10, flex: 1 }]}>
                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                            <DeleteIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    const handleBackPress = () => {
        navigation.goBack();
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
                                <Text style={styles.textContentAdmin}>Employee List</Text>
                            </View>
                            <View style={[styles.viewFlexHeader]}></View>
                        </View>
                    </View>

                    <View style={styles.checkOutContainer2}>
                        <FlatList
                            data={employees}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderEmployee}
                            showsVerticalScrollIndicator={false} />
                    </View>

                </View>
            </ScrollView>

            {/* Loading Modal */}
            {loading && (
                <Modal
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => setLoading(false)}
                >
                    {/* <View style={styles.modalContainer}>
                        <View style={styles.modalContent2}>
                            <ActivityIndicator size="large" color="#9B9B9B" />
                            <Text style={styles.modalText}>Loading...</Text>
                        </View>
                    </View> */}
                    <View style={styles.modalContainer}>
                        <ActivityIndicator size={50} color="#ffffff" />
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    );
};

export default EmployeAdmin;
