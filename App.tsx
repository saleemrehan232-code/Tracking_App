import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/screens/AppNavigator'
import ImedHome from './src/screens/ImedHome'
import FamilyHome from './src/screens/FamilyHome'
import Home from './src/bottom_navigation/Home'
import RecordsInformation from './src/bottom_navigation/RecordsInformation'
import DialogLeaveRequest from './src/bottom_navigation/DialogLeaveRequest'
import CheckInOut from './src/bottom_navigation/CheckInOut'
import CheckInOutAdmin from './src/bottom_navigation/CheckInOutAdmin'
import LeaveRequestAdmin from './src/bottom_navigation/LeaveRequestAdmin'
import TaskDetails from './src/bottom_navigation/TaskDetails'
import EmployeChats from './src/bottom_navigation/EmployeChats'
import Chat from './src/bottom_navigation/Chat'
import AddEmployeAdmin from './src/bottom_navigation/AddEmployeAdmin'
import AddMemberInformation from './src/bottom_navigation/AddMemberInformation'
import Leaves from './src/bottom_navigation/Leaves'
import Tasks from './src/bottom_navigation/Tasks'
import HomeAdmin from './src/bottom_navigation/HomeAdmin'

const App = () => {
  return (
    <AppNavigator/>
  )
}

export default App


// const fixedUsername = "william";
// const fixedPassword = "william$$98753";