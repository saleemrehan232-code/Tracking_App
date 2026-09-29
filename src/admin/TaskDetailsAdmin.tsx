import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import CalenderIcon from '../components/CalenderIcon3';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

const TaskDetailsAdmin = () => {

    const dataDropdown = [
        { label: 'Inprogress', value: 'Inprogress' },
        { label: 'Complete', value: 'Complete' },
        { label: 'Pending', value: 'Pending' },
    ];

    const [dropdownValue, setDropdownValue] = useState('Select');

    const navigation = useNavigation();
    // Function to navigate back
    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.containerHome}>

                    <View style={styles.containerRecordsTabs}>
                        <Image source={require('../images/HomeBg4.jpeg')} style={styles.image5Home} />
                        <View style={styles.overlay}>
                            <View style={styles.bgMainHome}>
                                <View style={styles.viewFlexHeader}>
                                    <TouchableOpacity onPress={handleBackPress}>
                                        <BtnBack />
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.viewFlexCenter]}>
                                    <Text style={styles.textContentAdmin}>Task Details</Text>
                                </View>
                                <View style={[styles.viewFlexHeader]}></View>
                            </View>

                            {/* <View style={[styles.searchRow]}>
                        <View style={styles.search001Bg}>
                            <Text style={styles.view001Margin}>Assign Task</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <MessageIcon />
                        </View>
                    </View> */}

                        </View>
                    </View>

                    {/* <View style={styles.bgMainRecords}>
                <View>
                    <Text style={styles.titlePersonal}>Leave Requests</Text>
                </View>
            </View> */}

                    <View style={styles.task2MainContainer}>
                        <View style={styles.taskContainer}>
                            <View style={styles.textContainerTask}>
                                <Text style={styles.titleTask}>Look after the pateint</Text>
                                <View style={styles.bgMainRecordsInfos}>
                                    <CalenderIcon />
                                    <Text style={styles.time2}>March 25 - 12:00 PM</Text>
                                </View>
                                <Text style={styles.description}>Look after John he has injured his....</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>Description</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Look after John he has injured his.... consectetur. Massa vitae purus sed fringilla eget viverra netus non. Neque duis morbi at vulputate sed quam vel cursus. Mauris lectus sed faucibus est dignissim eu. Montes in ac duis egestas ac. Quam amet amet laoreet orci at lorem lorem. Eu blandit pellentesque eget tortor sed laoreet sit ornare. In adipiscing dolor mauris at nam elementum laoreet. Lorem etiam mi feugiat lobortis.</Text>

                    <View style={styles.bgMainsRecord02}>
                        <View>
                            <Text style={styles.titlePersonal02}>Description 2</Text>
                        </View>
                    </View>

                    <Text style={styles.titlePersonal03}>Lorem ipsum dolor sit amet consectetur. Massa vitae purus sed fringilla eget viverra netus non. Neque duis morbi at vulputate sed quam vel cursus. Mauris lectus sed oreet. Lorem etiam mi feugiat lobortis.</Text>

                    {/* <View style={styles.bgMainsRecord02}>
                <View>
                    <Text style={styles.titlePersonal02}>Select Status</Text>
                </View>
            </View>

            <View style={[styles.dropdownContainerList05, { marginTop: 5, marginHorizontal: 25 }]}>
                <Dropdown
                    placeholderStyle={styles.placeholderStyleList2}
                    selectedTextStyle={styles.selectedTextStyleList2}
                    data={dataDropdown}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Type"
                    value={dropdownValue}
                    onChange={(item) => {
                        setDropdownValue(item.value);
                    }}
                />
            </View> */}


                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TaskDetailsAdmin;
