import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, SafeAreaView, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BtnNext1 from '../components/BtnNext1';
import SliderOnboarding1 from '../components/sliderOnboarding1';
import { styles } from './StyleSheet';

const { width, height } = Dimensions.get('window');

const Onboarding1 = (props) => {
  const [isLandscape, setIsLandscape] = useState(width > height);

  useEffect(() => {
    const handleResize = ({ window: { width, height } }) => {
      setIsLandscape(width > height);
    };

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      subscription?.remove();
    };
  }, []);

  const imageHeight = isLandscape ? height * 0.6 : height * 0.5;

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    OnboardingImage: {
      width: '100%',
      height: imageHeight,
      resizeMode: 'cover',
    },
  });

  const navigation = useNavigation();

  useEffect(() => {
      setTimeout(() => {
          props.navigation.navigate('Onboarding2');
      }, 2000);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={dynamicStyles.container}>
          <Image
            source={require('../images/onboarding4.jpeg')}
            style={dynamicStyles.OnboardingImage}
          />

          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => props.navigation.navigate('Onboarding2')}
          >
            <Text style={styles.OnboardingSkip}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => props.navigation.navigate('Onboarding2')}
          >
            <BtnNext1 />
          </TouchableOpacity>

          <View style={styles.slider}>
            <SliderOnboarding1 />
          </View>

          <View style={styles.OnboardingContainer}>
            <Text style={styles.textOnboarding}>Keep healthy work-life balance</Text>
            <Text style={styles.text2Onboarding}>
            By setting boundaries, managing time effectively, and prioritizing self-care, you can reduce stress, increase productivity, and enjoy a more fulfilling life.            </Text>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding1;
