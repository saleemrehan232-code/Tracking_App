import React from 'react';
import { SafeAreaView, Text, View, Image, FlatList } from 'react-native';
import { styles } from '../screens/StyleSheet';
import InfoIcon2 from '../components/InfoIcon2';

const Absent = () => {

  const employees = [
    {
      id: '1',
      name: 'Aadelyn Vaccaro',
      position: 'Senior Manager',
      status: 'Present',
      avatar: 'https://example.com/avatar1.jpg',
    },
    {
      id: '2',
      name: 'Aayna Septimus',
      position: 'Senior Manager',
      status: 'Present',
      avatar: 'https://example.com/avatar2.jpg',
    },
    {
      id: '3',
      name: 'Aain Dokidis',
      position: 'Senior Manager',
      status: 'Absent',
      avatar: 'https://example.com/avatar3.jpg',
    },
    {
      id: '4',
      name: 'Badelyn Vaccaro',
      position: 'Senior Manager',
      status: 'Present',
      avatar: 'https://example.com/avatar4.jpg',
    },
    {
      id: '5',
      name: 'Baren Carder',
      position: 'Senior Manager',
      status: 'Present',
      avatar: 'https://example.com/avatar5.jpg',
    },
    {
      id: '6',
      name: 'Aadelyn Vaccaro',
      position: 'Senior Manager',
      status: 'Present',
      avatar: 'https://example.com/avatar1.jpg',
    },
    {
      id: '7',
      name: 'Aayna Septimus',
      position: 'Senior Manager',
      status: 'Present',
      avatar: 'https://example.com/avatar2.jpg',
    },
    {
      id: '8',
      name: 'Aain Dokidis',
      position: 'Senior Manager',
      status: 'Absent',
      avatar: 'https://example.com/avatar3.jpg',
    },
    {
      id: '9',
      name: 'Badelyn Vaccaro',
      position: 'Senior Manager',
      status: 'Present',
      avatar: 'https://example.com/avatar4.jpg',
    },
    {
      id: '10',
      name: 'Baren Carder',
      position: 'Senior Manager',
      status: 'Present',
      avatar: 'https://example.com/avatar5.jpg',
    },

  ];

  const renderEmployee = ({ item }) => {
    return (
      <View style={styles.tabsBgsContainer}>
        <View style={styles.imageRadiusBg}>
          <Image source={require('../images/Profile.png')} style={styles.avatar} />
        </View>
        <View>
          <Text style={styles.nameRecord}>{item.name}</Text>
          <Text style={styles.position}>{item.position}</Text>
        </View>
        <View style={styles.infoStatus}>
          <InfoIcon2 style={styles.iconMargin} />
          <Text style={[styles.status, item.status === 'Present' ? styles.present : styles.absent]}>
            {item.status}
          </Text>
        </View>
      </View>
    );
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container2RecordsTabs}>

        <Text style={styles.startLetter}>A</Text>
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

export default Absent;
