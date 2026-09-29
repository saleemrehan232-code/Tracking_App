import React from 'react';
import { SafeAreaView, Text, View, Image, FlatList, ScrollView } from 'react-native';
import { styles } from '../screens/StyleSheet';
import InfoIcon2 from '../components/InfoIcon2';

const AllChat = () => {

    const employees = [
        {
            id: '1',
            name: 'Carla Septimus',
            position: 'Thanks a bunch',
            status: 'Present',
            time: '22:20  09/05',
        },
        {
            id: '2',
            name: 'Aayna Septimus',
            position: 'Thanks a bunch',
            status: 'Present',
            time: '22:20  09/05',
        },
        {
            id: '3',
            name: 'Aain Dokidis',
            position: 'Senior Manager',
            status: 'Absent',
            time: '22:20  09/05',
        },
        {
            id: '4',
            name: 'Badelyn Vaccaro',
            position: 'Senior Manager',
            status: 'Present',
            time: '22:20  09/05',
        },
        {
            id: '5',
            name: 'Baren Carder',
            position: 'Senior Manager',
            status: 'Present',
            time: '22:20  09/05',
        },
        {
            id: '6',
            name: 'Aadelyn Vaccaro',
            position: 'Senior Manager',
            status: 'Present',
            time: '22:20  09/05',
        },
        {
            id: '7',
            name: 'Aayna Septimus',
            position: 'Senior Manager',
            status: 'Present',
            time: '22:20  09/05',
        },
        {
            id: '8',
            name: 'Aain Dokidis',
            position: 'Senior Manager',
            status: 'Absent',
            time: '22:20  09/05',
        },
        {
            id: '9',
            name: 'Badelyn Vaccaro',
            position: 'Senior Manager',
            status: 'Present',
            time: '22:20  09/05',
        },
        {
            id: '10',
            name: 'Baren Carder',
            position: 'Senior Manager',
            status: 'Present',
            time: '22:20  09/05',
        },

    ];

    const renderEmployee = ({ item }) => {
        return (
            <View style={styles.tabsBgsContainer02}>
                <View style={styles.imageRadiusBg}>
                    <Image source={require('../images/Profile2.png')} style={styles.avatar} />
                </View>
                <View style={styles.centerContent}>
                    <Text style={styles.nameRecord02}>{item.name}</Text>
                    <Text style={styles.position02}>{item.position}</Text>
                </View>
                <View style={styles.infoStatus}>
                    <Text style={styles.position}>{item.time}</Text>
                    <Text style={[styles.timerTex02, { marginTop: 10 }]}>07</Text>
                </View>
            </View>
        );
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container2RecordsTabs}>
                <FlatList
                    data={employees}
                    keyExtractor={(item) => item.id}
                    renderItem={renderEmployee}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </SafeAreaView>
    );
};

export default AllChat;
