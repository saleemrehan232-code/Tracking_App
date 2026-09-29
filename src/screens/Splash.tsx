import React, { useEffect } from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './StyleSheet';
import Logo from '../components/logo';

const Splash = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        const parsedUserData = userData ? JSON.parse(userData) : null;
        setTimeout(() => {
          if (parsedUserData) {
            const { role } = parsedUserData;
            if (role === 'employee') {
              navigation.replace('UserBottomNavigation');
            } else {
              navigation.replace('AdminBottomNavigation');
            }
          } else {
            navigation.replace('Onboarding1');
          }
        }, 1000);
      } catch (error) {
        console.error('Error checking login status:', error);
        setTimeout(() => {
          navigation.replace('Onboarding1');
        }, 1000);
      }
    };

    checkLoginStatus();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.containerSplash}>
      <Image
        source={require('../images/Splash.jpeg')} 
        style={styles.bgImage} 
      />
      <View style={styles.contentContainer}>
        <Logo style={styles.logoSplash} />
        <Text style={styles.textSplash}>iMed Urgent Care</Text>
        <Text style={styles.text2Splash}>Occupational Safety & Health Service</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
