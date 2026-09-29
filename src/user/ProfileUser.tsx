import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileUser = () => {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
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
        id: userData.id || 'Unknown Care',
        text: userData.username || 'Unknown Care',
        position: userData.position || 'Unknown Care',
        address: userData.address || 'Unknown Care',
        email: userData.email || 'Unknown Care',
        phone: userData.phone || 'Unknown Care',
        image: userData.image ? { uri: userData.image } : require('../images/Profile.png')
      };
    }
    return {
      id: 'Id id null',
      text: 'Loading...',
      position: 'Position',
      image: require('../images/Profile.png')
    };
  };

  // get data from Async Storage
  const { id, text, position, address, email, phone,image } = getDisplayText();


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
                <Text style={styles.textContentAdmin}>{text}</Text>
              </View>
              <View style={[styles.viewFlexHeader]}></View>
            </View>
           
          </View>

          <View style={styles.bgMainRecords}>
            <View>
              <Text style={styles.titlePersonal}>Personal Information</Text>
            </View>
          </View>


          <View style={[styles.card02, styles.bgInofoRecords]}>

            <View style={styles.employeeHeader}>
              <Image
                source={image}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.namePersonal}>{text}</Text>
                <Text style={styles.positionPersonal}>{position}</Text>
              </View>
            </View>

            <View style={styles.viewBgPersonal}>

              <View style={styles.infoRow}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{email}</Text>
                <Text style={styles.label}>Joined</Text>
                <Text style={styles.value}>25 May 2020</Text>
              </View>

              <View style={[styles.infoRow,{flex: 1}]}>
                <Text style={styles.label}>Phone</Text>
                <Text style={styles.value}>{phone}</Text>
                <Text style={styles.label}>Address</Text>
                <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">{address}</Text>
              </View>
            </View>

          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileUser;

