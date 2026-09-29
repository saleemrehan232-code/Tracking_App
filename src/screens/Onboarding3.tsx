import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, SafeAreaView, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BtnNext3 from '../components/BtnNext3';
import { styles } from './StyleSheet';
import SliderOnboarding3 from '../components/sliderOnboarding3';

const { width, height } = Dimensions.get('window');

const Onboarding3 = (props) => {
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
            props.navigation.navigate('SelectDepartment');
        }, 2000);
    }, 
    [navigation]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={dynamicStyles.container}>
                    <Image
                        source={require('../images/onboarding6.jpeg')}
                        style={dynamicStyles.OnboardingImage}
                    />

                    <TouchableOpacity
                        style={styles.skipButton}
                        onPress={() => props.navigation.navigate('SelectDepartment')}
                    >
                        <Text style={styles.OnboardingSkip}>Skip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => props.navigation.navigate('SelectDepartment')}
                    >
                        <BtnNext3 />
                    </TouchableOpacity>

                    <View style={styles.slider}>
                        <SliderOnboarding3 />
                    </View>

                    <View style={styles.OnboardingContainer}>
                        <Text style={styles.textOnboarding}>Stay organized with team</Text>
                        <Text style={styles.text2Onboarding}>
                        Effective teamwork requires clear communication, shared goals, and a well-organized system to keep everyone on track.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Onboarding3;
