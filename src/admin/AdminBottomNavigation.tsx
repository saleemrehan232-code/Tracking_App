import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeIcon from '../components/HomeIcon';
import CalenderIcon from '../components/CalenderIcon';
import CheckInOutIcon from '../components/CheckInOutIcon';
import LeavesIcon2 from '../components/LeavesIcon2';
import HomeAdmin from './HomeAdmin';
import TasksAdmin from './TasksAdmin';
import LeavesAdmin from './LeavesAdmin';
import CheckInOutAdmin from './CheckInOutAdmin';

const BottomTab = createBottomTabNavigator();

const AdminBottomNavigation = ({ setSelectedScreen }) => {
  const insets = useSafeAreaInsets();

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
              case 'Tasks':
                IconComponent = CalenderIcon;
                break;
              case 'Leaves':
                IconComponent = LeavesIcon2;
                break;
              case 'Check In/Out':
                IconComponent = CheckInOutIcon;
                break;
              default:
                IconComponent = HomeIcon;
            }
            return <IconComponent color={color} focused={focused} width={size} height={size} />;
          },
          // tabBarLabelStyle: { fontSize: 12, marginTop: -2 },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: Platform.select({
              ios: 0, // Adjusted to align better with iOS guidelines
              android: 8, // Increased for Android to avoid overlap
            }),
          },
          tabBarStyle: {
            paddingTop: Platform.select({
              ios: 5, // Reduced padding for iOS
              android: 5, // Slightly reduced padding for Android
            }),
            paddingBottom: Platform.select({
              ios: 5, // Adjusted padding for iOS
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
          
          // tabBarIconStyle: { marginTop: 3 },
          // tabBarStyle: {
          //   paddingBottom: Platform.OS === 'ios' ? insets.bottom + 10 : 5,
          //   paddingTop: 5,
          //   height: Platform.OS === 'ios' ? insets.bottom + 65 : 60,
          // },
          tabBarActiveTintColor: '#4A5CD0',
          tabBarInactiveTintColor: '#858585',
        })}
      >
        <BottomTab.Screen name="Home" component={HomeAdmin} />
        <BottomTab.Screen name="Tasks" component={TasksAdmin} />
        <BottomTab.Screen name="Leaves" component={LeavesAdmin} />
        <BottomTab.Screen name="Check In/Out" component={CheckInOutAdmin} />
      </BottomTab.Navigator>
    </SafeAreaView>
  );
};

export default AdminBottomNavigation;
