import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { styles } from '../screens/StyleSheet';
import CalenderIcon2 from '../components/CalenderIcon2';

const CompletedTasks = () => {

    const tasks = [
        { id: '1', title: 'Look after the patient', time: 'March 25 - 12:00 PM', description: 'Look after John he has injured his...', status: 'Completed' },
        { id: '2', title: 'Meeting with the team', time: 'March 26 - 3:00 PM', description: 'Discuss project progress...', status: 'Pending' },
        { id: '3', title: 'Buy groceries', time: 'March 27 - 5:00 PM', description: 'Buy vegetables and fruits...', status: 'In Progress' },
        { id: '4', title: 'Look after the patient', time: 'March 25 - 12:00 PM', description: 'Look after John he has injured his...', status: 'Completed' },
        { id: '5', title: 'Meeting with the team', time: 'March 26 - 3:00 PM', description: 'Discuss project progress...', status: 'Pending' },
        { id: '6', title: 'Buy groceries', time: 'March 27 - 5:00 PM', description: 'Buy vegetables and fruits...', status: 'In Progress' },
        { id: '7', title: 'Look after the patient', time: 'March 25 - 12:00 PM', description: 'Look after John he has injured his...', status: 'Completed' },
        { id: '8', title: 'Meeting with the team', time: 'March 26 - 3:00 PM', description: 'Discuss project progress...', status: 'Pending' },
        { id: '9', title: 'Buy groceries', time: 'March 27 - 5:00 PM', description: 'Buy vegetables and fruits...', status: 'In Progress' },
        { id: '10', title: 'Look after the patient', time: 'March 25 - 12:00 PM', description: 'Look after John he has injured his...', status: 'Completed' },
        { id: '11', title: 'Meeting with the team', time: 'March 26 - 3:00 PM', description: 'Discuss project progress...', status: 'Pending' },
        { id: '12', title: 'Buy groceries', time: 'March 27 - 5:00 PM', description: 'Buy vegetables and fruits...', status: 'In Progress' },
        { id: '12', title: 'Look after the patient', time: 'March 25 - 12:00 PM', description: 'Look after John he has injured his...', status: 'Completed' },
        { id: '14', title: 'Meeting with the team', time: 'March 26 - 3:00 PM', description: 'Discuss project progress...', status: 'Pending' },
        { id: '15', title: 'Buy groceries', time: 'March 27 - 5:00 PM', description: 'Buy vegetables and fruits...', status: 'In Progress' },
    ];

    const renderItem = ({ item }) => {
        // Determine colors based on status
        let statusColor;
        if (item.status === 'Completed') {
            statusColor = '#16B8A4'; // Green
        } else if (item.status === 'Pending') {
            statusColor = '#FF5252'; // Red
        } else if (item.status === 'In Progress') {
            statusColor = '#0055A9'; // Blue
        }

        return (
            <View style={[styles.taskMainContainer, { backgroundColor: statusColor }]}>
                <View style={styles.taskContainer}>
                    <View style={styles.textContainerTask}>
                        <Text style={[styles.titleTask]}>{item.title}</Text>
                        <View style={styles.bgMainRecordsInfos}>
                            <CalenderIcon2 color={statusColor} />
                            <Text style={[styles.time, { color: statusColor }]}>{item.time}</Text>
                        </View>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <View style={[styles.statusContainer, { backgroundColor: statusColor }]}>
                        <Text style={styles.statusText}>{item.status}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container2RecordsTabs}>
                <FlatList
                        data={tasks}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
            </View>
        </SafeAreaView>

    )
}

export default CompletedTasks