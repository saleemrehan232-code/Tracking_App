import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import CheckInIcon from '../components/CheckInIcon';
import CheckOutIcon from '../components/CheckOutIcon';
import LeavesIcon from '../components/LeavesIcon';
import CircularProgressBar from '../components/CircularProgressBar';
import { useNavigation } from '@react-navigation/native';

const CheckInOutAdmin = ({ onTime, earlyCheckOut, late }) => {
  const totalDays = onTime + earlyCheckOut + late;

  const onTimePercentage = onTime / totalDays;
  const earlyCheckOutPercentage = earlyCheckOut / totalDays;
  const latePercentage = late / totalDays;

  const employees = [
    {
      id: '1',
      name: 'Start Shift',
      date: '23 Feb 2023r',
      status: 'Late',
      time: '09:00 AM',
    },
    {
      id: '2',
      name: 'End Shift',
      date: '23 Feb 2023',
      status: 'On time',
      time: '09:00 AM',
    },
    {
      id: '3',
      name: 'Leave',
      date: '23 Feb 2023',
      status: 'Pending',
      time: '09:00 AM',
    },
    {
      id: '4',
      name: 'Start Shift',
      date: '23 Feb 2023r',
      status: 'Late',
      time: '09:00 AM',
    },
    {
      id: '5',
      name: 'End Shift',
      date: '23 Feb 2023',
      status: 'On time',
      time: '09:00 AM',
    },

  ];

  const renderEmployee = ({ item }) => {
    let statusStyle;
    let icon;
    switch (item.status) {
      case 'Late':
        statusStyle = styles.late;
        icon = <CheckInIcon style={styles.iconByNotes2} />;
        break;
      case 'On time':
        statusStyle = styles.onTime;
        icon = <CheckOutIcon style={styles.iconByNotes2} />;
        break;
      case 'Pending':
        statusStyle = styles.pending;
        icon = <LeavesIcon style={styles.iconByNotes2} />;
        break;
    }

    return (
      <View style={styles.checkOutContainer}>
        <View style={styles.btnNextAdmin}>
          {icon}
        </View>
        <View>
          <Text style={styles.nameRecord}>{item.name}</Text>
          <Text style={styles.position}>{item.date}</Text>
        </View>
        <View style={styles.infoStatus}>
          <Text style={styles.nameRecord}>{item.time}</Text>
          <Text style={[styles.status, statusStyle]}>
            {item.status}
          </Text>
        </View>
      </View>
    );
  };

  const data = {
    onTime: { count: 80, color: '#1DCF6F' }, // Green color
    earlyCheckOut: { count: 60, color: '#F1A100' }, // Orange color
    late: { count: 40, color: '#E2502B' }, // Red color
    total: 100
  };

  const ProgressBar = ({ count, total, color }) => {
    const percentage = (count / total) * 100;
    return (
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
    );
  };

  const navigation = useNavigation();
  // Function to navigate back
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
                <Text style={styles.textContentAdmin}>Check In</Text>
              </View>
              <View style={[styles.viewFlexHeader]}></View>
            </View>
          </View>


          <View style={[styles.checkOutContainer, styles.bgInofoRecords, styles.topSpace]}>

            <View style={styles.viewAttandandce}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgressBar />
              </View>
            </View>

            <View style={styles.viewAttandandces2}>
              {/* On time */}
              <View>
                <View style={styles.bgMainAttandance}>
                  <Text style={styles.labelAttandance01}>On time</Text>
                  <Text style={styles.labelAttandance01}>{data.onTime.count} times</Text>
                </View>
                <View style={styles.statusRow}>
                  <ProgressBar count={data.onTime.count} total={data.total} color={data.onTime.color} />
                </View>
              </View>
              {/* Early Check Out */}
              <View>
                <View style={styles.bgMainAttandance}>
                  <Text style={styles.labelAttandance}>Early check out</Text>
                  <Text style={styles.labelAttandance}>{data.earlyCheckOut.count} times</Text>
                </View>
                <View style={styles.statusRow}>
                  <ProgressBar count={data.earlyCheckOut.count} total={data.total} color={data.earlyCheckOut.color} />
                </View>
              </View>
              {/* Late */}
              <View>
                <View style={styles.bgMainAttandance}>
                  <Text style={styles.labelAttandance}>Late</Text>
                  <Text style={styles.labelAttandance}>{data.late.count} times</Text>
                </View>
                <View style={styles.statusRow}>
                  <ProgressBar count={data.late.count} total={data.total} color={data.late.color} />
                </View>
              </View>
            </View>

          </View>

          <View style={[styles.bgMainRecords, {marginTop: 0}]}>
            <View>
              <Text style={styles.titlePersonal}>Recent Activity</Text>
            </View>

          </View>

          <View style={[styles.checkOutContainer2, {marginTop: 5}]}>
            <FlatList
              data={employees}
              keyExtractor={(item) => item.id}
              renderItem={renderEmployee}
              showsVerticalScrollIndicator={false}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckInOutAdmin;
