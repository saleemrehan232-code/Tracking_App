import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import Onboarding3 from './Onboarding3';
import AddEmployeAdmin from '../admin/AddEmployeAdmin';
import SecurityAndPrivacy from './SecurityAndPrivacy.tsx';
import TaskDetailsAdmin from '../user/TaskDetailsUser.tsx';
import AdminFamilyLogin from '../admin/AdminFamilyLogin';
import AdminImedLogin from '../admin/AdminImedLogin';
import UserFamilyLogin from '../user/UserFamilyLogin';
import UserImedLogin from '../user/UserImedLogin';
import AdminBottomNavigation from '../admin/AdminBottomNavigation';
import UserBottomNavigation from '../user/UserBottomNavigation.tsx';
import RecordsAdmin from '../admin/RecordsAdmin';
import RecordsInformationAdmin from '../admin/RecordsInformationAdmin';
import EmployeAdmin from '../admin/EmployeAdmin';
import AddNewMemberAdmin from '../admin/AddNewMemberAdmin';
import AddModeratorAdmin from '../admin/AddModeratorAdmin.tsx';
import AllChatsAdmin from '../admin/AllChatsAdmin.tsx';
import ChatsAdmin from '../admin/ChatsAdmin.tsx';
import CheckInOutUser from '../user/CheckInOutUser.tsx';
import ChatsUser from '../user/ChatsUser.tsx';
import LeaveRequestUser from '../user/LeaveRequestUser.tsx';
import TaskDetailsUser from '../user/TaskDetailsUser.tsx';
import SelectDepartment from './SelectDepartment.tsx';
import AllChatsUser from '../user/AllChatsUser.tsx';
import AllAdmin from '../user/AllAdmin.tsx';
import AllModerator from '../user/AllModerator.tsx';
import MonthlyRecordAdmin from '../admin/MonthlyRecordAdmin.tsx';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='Onboarding1' component={Onboarding1} options={{ headerShown: false }} />
        <Stack.Screen name='Onboarding2' component={Onboarding2} options={{ headerShown: false }} />
        <Stack.Screen name='Onboarding3' component={Onboarding3} options={{ headerShown: false }} />
        <Stack.Screen name='AdminFamilyLogin' component={AdminFamilyLogin} options={{ headerShown: false }} />
        <Stack.Screen name='AdminImedLogin' component={AdminImedLogin} options={{ headerShown: false }} />
        <Stack.Screen name='UserFamilyLogin' component={UserFamilyLogin} options={{ headerShown: false }} />
        <Stack.Screen name='UserImedLogin' component={UserImedLogin} options={{ headerShown: false }} />
        <Stack.Screen name='AdminBottomNavigation' component={AdminBottomNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='UserBottomNavigation' component={UserBottomNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='RecordsAdmin' component={RecordsAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='RecordsInformationAdmin' component={RecordsInformationAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='EmployeAdmin' component={EmployeAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='AddEmployeAdmin' component={AddEmployeAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='AddNewMemberAdmin' component={AddNewMemberAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='AddModeratorAdmin' component={AddModeratorAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='AllChatsAdmin' component={AllChatsAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='ChatsAdmin' component={ChatsAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='CheckInOutUser' component={CheckInOutUser} options={{ headerShown: false }} />
        <Stack.Screen name='ChatsUser' component={ChatsUser} options={{ headerShown: false }} />
        <Stack.Screen name='LeaveRequestUser' component={LeaveRequestUser} options={{ headerShown: false }} />
        <Stack.Screen name='SecurityAndPrivacy' component={SecurityAndPrivacy} options={{ headerShown: false }} />
        <Stack.Screen name='TaskDetailsAdmin' component={TaskDetailsAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='TaskDetailsUser' component={TaskDetailsUser} options={{ headerShown: false }} />
        <Stack.Screen name='MonthlyRecordAdmin' component={MonthlyRecordAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='SelectDepartment' component={SelectDepartment} options={{ headerShown: false }} />
        <Stack.Screen name='AllChatsUser' component={AllChatsUser} options={{ headerShown: false }} />
        <Stack.Screen name='AllModerator' component={AllModerator} options={{ headerShown: false }} />
        <Stack.Screen name='AllAdmin' component={AllAdmin} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
