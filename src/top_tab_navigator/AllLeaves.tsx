import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../screens/StyleSheet';
import CalenderIcon2 from '../components/CalenderIcon2';
import BtnBack from '../components/BtnBack';
import DownloadIcon from '../components/DownloadIcon';

const AllLeaves = () => {
    const tasks = [
        { id: '1', title: 'Look after the patient', time: 'March 25 - 12:00 PM', description: 'Look after John he has injured his', status: 'Accepted' },
        { id: '2', title: 'Meeting with the team', time: 'March 26 - 3:00 PM', description: 'Discuss project progress...', status: 'Rejected' },
        { id: '3', title: 'Buy groceries', time: 'March 27 - 5:00 PM', description: 'Buy vegetables and fruits...', status: 'Accepted' },
        { id: '4', title: 'Look after the patient', time: 'March 25 - 12:00 PM', description: 'Look after John he has injured his...', status: 'Accepted' },
        { id: '5', title: 'Meeting with the team', time: 'March 26 - 3:00 PM', description: 'Discuss project progress...', status: 'Rejected' },
        { id: '6', title: 'Buy groceries', time: 'March 27 - 5:00 PM', description: 'Buy vegetables and fruits...', status: 'Accepted' },
        { id: '7', title: 'Look after the patient', time: 'March 25 - 12:00 PM', description: 'Look after John he has injured his...', status: 'Accepted' },
        { id: '8', title: 'Meeting with the team', time: 'March 26 - 3:00 PM', description: 'Discuss project progress...', status: 'Rejected' },
        { id: '9', title: 'Buy groceries', time: 'March 27 - 5:00 PM', description: 'Buy vegetables and fruits...', status: 'Accepted' },
        { id: '10', title: 'Look after the patient', time: 'March 25 - 12:00 PM', description: 'Look after John he has injured his...', status: 'Accepted' },
        { id: '11', title: 'Meeting with the team', time: 'March 26 - 3:00 PM', description: 'Discuss project progress...', status: 'Rejected' },
        { id: '12', title: 'Buy groceries', time: 'March 27 - 5:00 PM', description: 'Buy vegetables and fruits...', status: 'Accepted' },
        { id: '12', title: 'Look after the patient', time: 'March 25 - 12:00 PM', description: 'Look after John he has injured his...', status: 'Accepted' },
        { id: '14', title: 'Meeting with the team', time: 'March 26 - 3:00 PM', description: 'Discuss project progress...', status: 'Rejected' },
        { id: '15', title: 'Buy groceries', time: 'March 27 - 5:00 PM', description: 'Buy vegetables and fruits...', status: 'Accepted' },
    ];

    // State to manage dialog visibility
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    // Function to open dialog
    const showDialog = () => {
        setIsDialogVisible(true);
    };

    // Function to close dialog
    const closeDialog = () => {
        setIsDialogVisible(false);
    };

    const renderItem = ({ item }) => {
        // Determine colors based on status
        let statusColor;
        if (item.status === 'Accepted') {
            statusColor = '#16B8A4'; // Green
        } else if (item.status === 'Rejected') {
            statusColor = '#FF5252'; // Red
        }
        // else if (item.status === 'Accepted') {
        //     statusColor = '#0055A9'; // Blue
        // }

        return (
            <View style={[styles.taskMainContainer, { backgroundColor: statusColor }]}>
                <TouchableOpacity onPress={showDialog}>
                    <View style={styles.taskContainer}>
                        <View style={styles.textContainerTask}>
                            <Text style={[styles.titleTask2]}>{item.title}</Text>
                            <View style={[styles.bgMainRecordsInfos, { marginVertical: 5 }]}>
                                <CalenderIcon2 color={statusColor} />
                                <Text style={[styles.time3, { color: statusColor }]}>{item.time}</Text>
                            </View>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                        <View style={[styles.statusContainer, { backgroundColor: statusColor }]}>
                            <Text style={styles.statusText}>{item.status}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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

            {/* Dialog Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isDialogVisible}
                onRequestClose={closeDialog}
            >
                <View style={styles.dialogContainer}>
                    <View style={styles.dialogBox}>
                        <TouchableOpacity onPress={closeDialog}>
                            <BtnBack />
                        </TouchableOpacity>

                        <Text style={styles.headerDialog}>Leave Request</Text>

                        <View style={styles.formGroup}>
                            <Text style={styles.labelDialog}>Employee Name</Text>
                            <TextInput style={styles.input} value="Alex Jones" editable={false} />
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.labelDialog}>Application Type</Text>
                            <TextInput style={styles.input} value="Personal Leave" editable={false} />
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.labelDialog}>Leave</Text>
                            <View style={styles.leaveContainer}>
                                <TextInput style={styles.input2} value="02/01/2024" editable={false} />
                                <TextInput style={styles.input3} value="02/01/2024" editable={false} />
                            </View>
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.labelDialog}>Remarks</Text>
                            <TextInput style={styles.input} value="Hospitalized due to dengue" editable={false} />
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.labelDialog}>Substitute</Text>
                            <TextInput style={styles.input} value="Peter Parker" editable={false} />
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.labelDialog}>Attachment</Text>
                            <View style={styles.attachmentContainer}>
                                <Text style={styles.attachmentText}>Hospitalreport.pdf</Text>
                                <TouchableOpacity>
                                    <DownloadIcon />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.acceptButton} onPress={closeDialog}>
                                <Text style={styles.buttonTextDialog}>Accept</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rejectButton} onPress={closeDialog}>
                                <Text style={styles.buttonTextDialog}>Reject</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default AllLeaves;
