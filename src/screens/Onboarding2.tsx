import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, SafeAreaView, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BtnNext2 from '../components/BtnNext2';
import SliderOnboarding1 from '../components/sliderOnboarding1';
import { styles } from './StyleSheet';
import SliderOnboarding2 from '../components/sliderOnboarding2';

const { width, height } = Dimensions.get('window');

const Onboarding2 = (props) => {
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

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Onboarding3');
    }, 2000);
  }, [navigation]);

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={dynamicStyles.container}>
          <Image
            source={require('../images/onboarding5.jpeg')}
            style={dynamicStyles.OnboardingImage}
          />

          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => props.navigation.navigate('Onboarding3')}
          >
            <Text style={styles.OnboardingSkip}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => props.navigation.navigate('Onboarding3')}
          >
            <BtnNext2 />
          </TouchableOpacity>

          <View style={styles.slider}>
            <SliderOnboarding2 />
          </View>

          <View style={styles.OnboardingContainer}>
            <Text style={styles.textOnboarding}>Track your work & get result</Text>
            <Text style={styles.text2Onboarding}>
            Tracking your work is essential for measuring progress, identifying areas for improvement, and staying accountable.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding2;
