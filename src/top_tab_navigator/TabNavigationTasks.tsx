import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
import All from './All';
import Present from './Present';
import Absent from './Absent';
import Leave from './LeaveRecord';
import AllTasks from './AllTasks';
import PendingTasks from './PendingTasks';
import InprogressTasks from './InprogressTasks';
import CompletedTasks from './CompletedTasks';

const Tab = createMaterialTopTabNavigator();

const TabNavigationTasks = () => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10, }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#4E4E4E',
                    tabBarInactiveTintColor: '#9D9D9D',
                    tabBarLabelStyle: {
                        fontSize: 12,
                        textTransform: 'none',
                        fontWeight: 'bold',
                        width: '100%',
                        textAlign: 'center',
                    },
                    tabBarStyle: {
                        backgroundColor: '#FFFFFF',
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#F6F6F6',
                        height: 50,
                        borderRadius: 10,
                        alignSelf: 'center',
                    },
                    tabBarItemStyle: {
                        borderRadius: 20,
                        marginVertical: 5,
                        marginHorizontal: 10,
                        paddingVertical: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    tabBarLabel: ({ focused }) => {
                        let label;
                        switch (route.name) {
                            case 'All':
                                label = 'All';
                                break;
                            case 'Present':
                                label = 'Present';
                                break;
                            case 'Absents':
                                label = 'Absents';
                                break;
                            case 'Leaves Request':
                                label = 'Leaves';
                                break;
                            default:
                                label = route.name;
                        }

                        return (
                            <Text
                                style={{
                                    color: focused ? '#4E4E4E' : '#9D9D9D',
                                    width: '100%',
                                    textAlign: 'center',
                                    fontFamily: 'medium',
                                    fontSize: 14,
                                }}
                                numberOfLines={1}
                            >
                                {label.charAt(0).toUpperCase() + label.slice(1)}
                            </Text>
                        );
                    },
                })}
            >
                <Tab.Screen name="All" component={AllTasks} />
                <Tab.Screen name="Pending" component={PendingTasks} />
                <Tab.Screen name="InProgress" component={InprogressTasks} />
                <Tab.Screen name="Completed" component={CompletedTasks} />
            </Tab.Navigator>
        </View>
    );
};

export default TabNavigationTasks;
