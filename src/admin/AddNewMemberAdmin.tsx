import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, ScrollView, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import { Dropdown } from 'react-native-element-dropdown';
import ProfilePictureIcon from '../components/ProfilePictureIcon';
import UploadImageIcon from '../components/UploadImageIcon';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../components/Urls';

const AddNewMemberAdmin = () => {
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [loading, setLoading] = useState(false);  // Track loading state
    const [imageUri, setImageUri] = useState(null);
    const [imageString, setImageString] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [dropdownValue2, setDropdownValue2] = useState('Select');

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


    const dataDropdown2 = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ];

    const handleBackPress = () => {
        navigation.goBack();
    };

    const showDialog = () => {
        setIsDialogVisible(true);
    };

    const closeDialog = () => {
        setIsDialogVisible(false);
    };

    const uploadImageAndGetString = async (imageUri) => {
        try {
            const formData = new FormData();
            formData.append('file', {
                uri: imageUri,
                type: 'image/jpeg',
                name: 'profile_picture.jpg',
            });
    
            const response = await api.post('/admin/utils/uploadSingleFile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',  // Set the content type for file upload
                },
            });
    
            const result = response.data;
    
            if (result.status === 'success') {
                const uploadedImageUrl = result.data.image;
                setImageString(uploadedImageUrl);
            } else {
                console.log('Image upload failed:', result.message);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    

    const handleImagePicker = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 1,
            },
            async (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else {
                    const selectedImageUri = response.assets ? response.assets[0].uri : null;
                    if (selectedImageUri) {
                        setImageUri(selectedImageUri);
                        await uploadImageAndGetString(selectedImageUri);
                    }
                }
            }
        );
    };

    const handleSubmit = async () => {
        const data = {
            firstName,
            lastName,
            username,
            image: imageString,
            department,
            position,
            hourlyRate,
            address,
            password,
            email,
            phone,
            gender: dropdownValue2,
            type: type,
        };
    
        setLoading(true);  // Show loading modal when submitting
    
        try {
            const response = await api.post('/admin/employee/addRecord', data);
    
            const result = response.data;  // Access the response data
    
            if (result.status === 'success') {
                setLoading(false);  // Hide loading modal
                showDialog();
                resetFormFields();
            } else {
                setLoading(false);  // Hide loading modal
                alert(result.message);
            }
        } catch (error) {
            setLoading(false);  // Hide loading modal
            console.error('Error:', error);
            alert('Something went wrong');
        }
    };
    

    const resetFormFields = () => {
        setFirstName('');
        setLastName('');
        setUsername('');
        setDepartment('');
        setEmail('');
        setPhone('');
        setPosition('');
        setHourlyRate('');
        setAddress('');
        setPassword('');
        setDropdownValue2('Select');
        setImageUri(null);
        setImageString('');
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
                                <Text style={styles.textContentAdmin}>Add Information</Text>
                            </View>
                            <View style={[styles.viewFlexHeader]}></View>
                        </View>
                    </View>

                    <View style={[styles.checkOutContainer03, styles.bgInofoRecords, { marginTop: 20 }]}>
                        <View style={styles.viewAttandandce}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.profileAddMmember}>
                                    <View style={styles.imageContainer}>
                                        <View style={styles.profileImage}>
                                            {imageUri ? (
                                                <Image source={{ uri: imageUri }} style={styles.profileImage02} />
                                            ) : (
                                                <ProfilePictureIcon />
                                            )}
                                        </View>
                                        <TouchableOpacity style={styles.uploadButton} onPress={handleImagePicker}>
                                            <UploadImageIcon />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewAttandandces2}>
                            <View style={styles.textFields}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.labelDialog}>First Name</Text>
                                    <TextInput
                                        style={styles.inputAddMmember}
                                        value={firstName}
                                        onChangeText={setFirstName}
                                        placeholder="First Name"
                                        placeholderTextColor="#4E4E4E"
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.labelDialog}>Last Name</Text>
                                    <TextInput
                                        style={styles.inputAddMmember}
                                        value={lastName}
                                        onChangeText={setLastName}
                                        placeholder="Last Name"
                                        placeholderTextColor="#4E4E4E"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.formGroup02}>
                        <Text style={styles.labelDialog}>Username</Text>
                        <TextInput
                            style={styles.input4}
                            value={username}
                            onChangeText={setUsername}
                            placeholder="Username"
                            placeholderTextColor="#4E4E4E"
                        />
                    </View>

                    <View style={styles.formGroup02}>
                        <Text style={styles.labelDialog}>Email</Text>
                        <TextInput
                            style={styles.input4}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="example@gmail.com"
                            keyboardType="email-address"
                            placeholderTextColor="#4E4E4E"
                        />
                    </View>

                    <View style={styles.formGroup02}>
                        <Text style={styles.labelDialog}>Password</Text>
                        <TextInput
                            style={styles.input4}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Password"
                            placeholderTextColor="#4E4E4E"
                            secureTextEntry
                        />
                    </View>

                    <View style={styles.formGroup02}>
                        <Text style={styles.labelDialog}>Phone Number</Text>
                        <TextInput
                            style={styles.input4}
                            value={phone}
                            onChangeText={setPhone}
                            placeholder="+13024130679"
                            placeholderTextColor="#4E4E4E"
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.formGroup02}>
                        <Text style={styles.labelDialog}>Department</Text>
                        <TextInput
                            style={styles.input4}
                            value={department}
                            onChangeText={setDepartment}
                            placeholder="Department"
                            placeholderTextColor="#4E4E4E"
                        />
                    </View>

                    <View style={styles.formGroup02}>
                        <Text style={styles.labelDialog}>Position</Text>
                        <TextInput
                            style={styles.input4}
                            value={position}
                            onChangeText={setPosition}
                            placeholder="Position"
                            placeholderTextColor="#4E4E4E"
                        />
                    </View>

                    <View style={styles.formGroup02}>
                        <Text style={styles.labelDialog}>Hourly Rate</Text>
                        <TextInput
                            style={styles.input4}
                            value={hourlyRate}
                            onChangeText={setHourlyRate}
                            placeholder="Hourly Rate"
                            placeholderTextColor="#4E4E4E"
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.formGroup02}>
                        <Text style={styles.labelDialog}>Address</Text>
                        <TextInput
                            style={styles.input4}
                            value={address}
                            onChangeText={setAddress}
                            placeholder="Address"
                            placeholderTextColor="#4E4E4E"
                        />
                    </View>

                    <View style={styles.formGroup02}>
                        <Text style={styles.labelDialog}>Gender</Text>
                        <View style={[styles.dropdownContainerList05, { marginTop: 5 }]}>

                        <Dropdown
                            placeholderStyle={styles.placeholderStyleList2}
                            selectedTextStyle={styles.selectedTextStyleList2}
                            data={dataDropdown2}
                            maxHeight={120}
                            labelField="label"
                            valueField="value"
                            placeholder={dropdownValue2 || 'Select'}
                            value={dropdownValue2}
                            onChange={(item) => setDropdownValue2(item.value)}
                        />
                        </View>
                    </View>


                    {/* Your existing layout here */}
                    <View style={[styles.buttonContainer, { margin: 20 }]}>
                        <TouchableOpacity style={styles.acceptButton02} onPress={handleSubmit}>
                            <Text style={styles.buttonTextDialog}>Add Member</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Loading Modal */}
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

                    {/* Success Dialog */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isDialogVisible}
                        onRequestClose={closeDialog}>
                        <View style={styles.dialogContainer}>
                            <View style={styles.dialogBox}>
                                <Text style={styles.headerDialog03}>Member added successfully!</Text>
                                <Text style={styles.headerDialog02}>You can find the add member in the record section</Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={styles.acceptButton02} onPress={closeDialog}>
                                        <Text style={styles.buttonTextDialog}>Return to Home</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AddNewMemberAdmin;
