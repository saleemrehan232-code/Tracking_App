import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Modal, ActivityIndicator, Alert } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import { useNavigation } from '@react-navigation/native';
import api from '../components/Urls';
import InfoIcon2 from '../components/InfoIcon2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllModerator = (props) => {
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
            // if (!type) {
            //     console.error("Error: 'type' is undefined or empty");
            //     return;
            // }

            setLoading(true);
            try {
                // console.log('Fetching employees for type:', type);
                const response = await api.get(`employee/moderator/getAll`);
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

    // Render each employee item
    const renderEmployee = ({ item }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ChatsUser', { employeeData: item })}
                >
                    <View style={styles.tabsBgsContainer}>
                        <View style={styles.imageRadiusBg}>
                            {item.id && item.id.trim() !== '' ? (
                                <Image source={{ uri: item.image }} style={styles.avatar} />
                            ) : (
                                <Image source={require('../images/Profile.png')} style={styles.avatar} />
                            )}
                        </View>
                        <View style={{ flex: 2 }}>
                            <Text style={[styles.nameRecord, { fontFamily: 'semibold' }]} numberOfLines={1} ellipsizeMode="tail">{`${item.firstName} ${item.lastName}`}</Text>
                            <Text style={[styles.position, { marginTop: 3 }]} numberOfLines={1} ellipsizeMode="tail">{item.username}</Text>
                            <Text style={[styles.position, { marginTop: 3 }]} numberOfLines={1} ellipsizeMode="tail">{item.position}</Text>
                        </View>
                        <View style={[styles.infoStatus, { flex: 1 }]}>
                            <InfoIcon2 style={styles.iconMargin} />
                            <Text style={styles.status}>
                                {item.status}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
                                <Text style={styles.textContentAdmin}>Chat with Moderator</Text>
                            </View>
                            <View style={[styles.viewFlexHeader]}></View>
                        </View>
                    </View>

                    <View style={styles.checkOutContainer2}>
                        <FlatList
                            data={employees}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderEmployee}
                            showsVerticalScrollIndicator={false}
                        />
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
                    <View style={styles.modalContainer}>
                        <ActivityIndicator size={50} color="#ffffff" />
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    );
};

export default AllModerator;
