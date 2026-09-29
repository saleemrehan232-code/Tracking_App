import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import { TouchableOpacity } from 'react-native';
import DownloadIcon from '../components/DownloadIcon';
import { Dropdown } from 'react-native-element-dropdown';
import ForwordIcon from '../components/ForwordIcon';
import ProfileIcon from '../components/ProfileIcon';
import ProfileIcon2 from '../components/ProfileIcon2';
import ProfileIcon3 from '../components/ProfileIcon3';
import { useNavigation } from '@react-navigation/native';

const AddEmployeAdmin = (props) => {

    const dataDropdown = [
        { label: 'Urgent', value: 'Urgent' },
        { label: 'Today', value: 'Today' },
        { label: 'Yesterday', value: 'Yesterday' },
        { label: 'Tomorrow', value: 'Tomorrow' },
    ];

    const dataDropdown2 = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Both', value: 'Both' },
    ];

    const [dropdownValue, setDropdownValue] = useState('Select');
    const [dropdownValue2, setDropdownValue2] = useState('Select');

    const navigation = useNavigation();

    // Function to navigate back
    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
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
                                <Text style={styles.textContentAdmin}>Add Member</Text>
                            </View>
                            <View style={[styles.viewFlexHeader]}></View>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => props.navigation.navigate('AddNewMemberAdmin')}>
                        <View style={[styles.attachmentContainer02, { marginTop: 20, marginHorizontal: 20, paddingHorizontal: 15 }]}>
                            <View style={styles.bgMainRecordsInfos}>
                                <ProfileIcon2 />
                                <Text style={styles.attachmentText03}>Add an Employee</Text>
                            </View>
                            <ForwordIcon />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('AddModeratorAdmin')}>
                        <View style={[styles.attachmentContainer02, { marginTop: 20, marginHorizontal: 20, paddingHorizontal: 15 }]}>
                            <View style={styles.bgMainRecordsInfos}>
                                <ProfileIcon3 />
                                <Text style={styles.attachmentText03}>Add an Moderator</Text>
                            </View>
                            <ForwordIcon />
                        </View>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AddEmployeAdmin;
