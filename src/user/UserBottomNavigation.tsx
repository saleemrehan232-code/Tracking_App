import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeIcon from '../components/HomeIcon';
import ProfileIcon from '../components/ProfileIcon';
import RecordsIcon2 from '../components/RecordsIcon2';
import HomeUser from './HomeUser';
import ProfileUser from './ProfileUser';
import SettingUser from './SettingUser';

const BottomTab = createBottomTabNavigator();

const UserBottomNavigation = ({ setSelectedScreen }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const handleScreenChange = (routeName) => {
    setSelectedScreen(routeName);
    navigation.navigate(routeName);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let IconComponent;
            switch (route.name) {
              case 'Home':
                IconComponent = HomeIcon;
                break;
              case 'Profile':
                IconComponent = ProfileIcon;
                break;
              case 'Setting':
                IconComponent = RecordsIcon2;
                break;
              default:
                IconComponent = HomeIcon;
            }

            // Centering icons properly with default size handling
            return (
              <IconComponent
                color={color}
                width={size ?? 24}
                height={size ?? 24}
                style={{ alignSelf: 'center' }}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: Platform.select({
              ios: 0, // Adjusted to align better with iOS guidelines
              android: 8, // Increased for Android to avoid overlap
            }),
          },
          tabBarStyle: {
            paddingTop: Platform.select({
              ios: 2, // Reduced padding for iOS
              android: 5, // Slightly reduced padding for Android
            }),
            paddingBottom: Platform.select({
              ios: 8, // Adjusted padding for iOS
              android: 0, // Increased padding for Android to create more space
            }),
            height: Platform.select({
              ios: 60, // Adjusted to match iOS standard
              android: 60, // Matched to iOS height
            }),
            borderTopWidth: 0.5, // Added a subtle border for consistency
            elevation: 5, // Added elevation for Android to match iOS shadow
          },
          tabBarIconStyle: {
            marginTop: Platform.select({
              ios: 0, // No margin for iOS
              android: 5, // Small margin for Android to center icon better
            }),
          },

          // tabBarIconStyle: { 
          //   marginTop: 3 
          // },
          // tabBarStyle: {
          //   height: Platform.OS === 'ios' ? insets.bottom + 65 : 60,
          //   paddingBottom: Platform.OS === 'ios' ? insets.bottom + 10 : 5,
          //   paddingTop: 5,
          //   backgroundColor: '#FFFFFF',
          //   borderTopWidth: 0.5,
          //   borderTopColor: '#E0E0E0',
          // },

          tabBarActiveTintColor: '#4A5CD0',
          tabBarInactiveTintColor: '#858585',
        })}
      >
        <BottomTab.Screen name="Home" component={HomeUser} />
        <BottomTab.Screen name="Profile" component={ProfileUser} />
        <BottomTab.Screen name="Setting" component={SettingUser} />
      </BottomTab.Navigator>
    </SafeAreaView>
  );
};

export default UserBottomNavigation;
