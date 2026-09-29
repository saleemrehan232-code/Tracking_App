import React, { useState } from 'react';
import { View, Image, Text, TextInput, SafeAreaView, ScrollView, Modal, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../screens/StyleSheet';
import UserNameIcon from '../components/UserNameIcon';
import PasswordIcon from '../components/PasswordIcon';
import PasswordToggleIcon from '../components/PasswordToggleIcon';
import FamilyUrgentCare from '../components/FamilyUrgentCare';
import BtnBack from '../components/BtnBack';
import { useNavigation } from '@react-navigation/native';
import api from '../components/Urls'; // Import the Axios instance (api) from the Urls component
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const UserFamilyLogin = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [apiError, setApiError] = useState('');
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    // Function to navigate back
    const handleBackPress = () => {
        navigation.goBack();
    };

    // Validation function
    const validateInputs = () => {
        let valid = true;

        if (username.trim() === '') {
            setUsernameError('Username is required.');
            valid = false;
        } else {
            setUsernameError('');
        }

        if (password.trim() === '') {
            setPasswordError('Password is required.');
            valid = false;
        } else {
            setPasswordError('');
        }

        return valid;
    };

    // Handle sign-in press
    const handleSignIn = async () => {
        if (validateInputs()) {
            setLoading(true);
            setModalVisible(true);

            try {
                console.log("Sending credentials: ", { username, password, type: 'family' });

                const response = await api.post('employee/auth/login', {
                    username: username,
                    password: password,
                    type: 'family',
                });

                console.log("API Response: ", response.data);

                if (response.data && response.data.data) {
                    // Extract the necessary fields from the response data
                    const { id, type, username, email, phone, image, role, position, address } = response.data.data;

                    // Prepare the data to save in AsyncStorage
                    const userData = { id, type, username, email, phone, image, role, position, address };

                    // Save the data to AsyncStorage
                    await AsyncStorage.setItem('userData', JSON.stringify(userData));
                    console.log("Data saved to AsyncStorage: ", userData);

                    // You can also check the saved data by getting it immediately after saving
                    const savedData = await AsyncStorage.getItem('userData');
                    if (savedData !== null) {
                        console.log('Data retrieved from AsyncStorage immediately after saving:', JSON.parse(savedData));
                    }

                    // Navigate to the next screen
                    setTimeout(() => {
                        setModalVisible(false);
                        props.navigation.navigate('UserBottomNavigation');
                    }, 1000);
                }
                else {
                    setModalVisible(false);
                    Alert.alert('Alert:', 'Invalid username or password');
                }
            } catch (error) {
                setModalVisible(false);
                Alert.alert('Alert', error.response?.data.message || 'Somethig went wrong! Please try again');
                console.error("API error: ", error);
            } finally {
                setLoading(false);
            }
        }
    };




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.containerAdmin}>
                    <Image source={require('../images/AdminScreen3.jpeg')} style={styles.backgroundImage} />

                    <View style={styles.bgMainHome}>
                        <View style={styles.viewFlexHeader}>
                            <TouchableOpacity onPress={handleBackPress}>
                                <BtnBack />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.adminContainer02}>
                        <FamilyUrgentCare style={styles.logoAdmin} />
                        <Text style={styles.text3Admin}>Family Urgent Care</Text>
                        <Text style={styles.text4Admin}>Occupational Safety & Health Service</Text>
                    </View>

                    <View style={styles.bg2MainAdmin}>
                        <View>
                            <Text style={styles.text3ContentAdmin}>Username</Text>
                            <View style={styles.view2}>
                                <View>
                                    <UserNameIcon />
                                </View>
                                <TextInput
                                    placeholder="Username"
                                    placeholderTextColor="#4E4E4E"
                                    // keyboardType="email-address"
                                    style={styles.viewMargin}
                                    value={username}
                                    onChangeText={setUsername}
                                />
                            </View>
                            {usernameError ? (
                                <Text style={styles.errorText}>{usernameError}</Text>
                            ) : null}
                        </View>

                        <View>
                            <Text style={styles.text4ContentAdmin}>Password</Text>
                            <View style={styles.view2}>
                                <View>
                                    <PasswordIcon />
                                </View>
                                <TextInput
                                    placeholder="Password"
                                    placeholderTextColor="#4E4E4E"
                                    secureTextEntry={!showPassword}
                                    style={styles.viewMargin}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconEnd}>
                                    <PasswordToggleIcon style={styles.eyeIcon} />
                                </TouchableOpacity>
                            </View>
                            {passwordError ? (
                                <Text style={styles.errorText}>{passwordError}</Text>
                            ) : null}
                        </View>

                        {apiError ? (
                            <Text style={styles.errorText}>{apiError}</Text>
                        ) : null}

                        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                            <Text style={styles.buttonTextLogin}>Sign in</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomRow}>
                        <Text style={styles.textLogInAdmin}>Log In</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('AdminFamilyLogin')}>
                            <Text style={styles.textLoginAdmin}>As Admin</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Loading and Success Modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    {loading ? (
                        // Loading State
                        // <View style={styles.modalContent2}>
                        //     <ActivityIndicator size="large" color="#9B9B9B" />
                        //     <Text style={styles.modalText}>Loading...</Text>
                        // </View>
                        <View>
                            <ActivityIndicator size={50} color="#ffffff" />
                        </View>
                    ) : (
                        // Success State
                        <View style={styles.successModalContent}>
                            <Text style={styles.modalText}>Login Successfully</Text>
                        </View>
                    )}
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default UserFamilyLogin;
