import React from 'react';
import { SafeAreaView, Text, View, TextInput, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../screens/StyleSheet';
import BtnBack from '../components/BtnBack';
import SearchIcon from '../components/SearchIcon';
import { useNavigation } from '@react-navigation/native';

const AllChatsUser = (props) => {

    const employees = [
        {
            id: '1',
            name: 'Carla Septimus',
            position: 'Thanks a bunch!',
            status: 'Present',
            time: '22:20  09/05',
        },
        {
            id: '2',
            name: 'Aayna Septimus',
            position: 'Thanks a bunch',
            status: 'Present',
            time: '22:20  09/05',
        },
    ];

    const renderEmployee = ({ item }) => {
        return (
            <View style={styles.tabsBgsContainer02}>
                <TouchableOpacity style={styles.tabsBgsContainer03} onPress={() => props.navigation.navigate('ChatsAdmin')}>
                    <View style={styles.imageRadiusBg}>
                        <Image source={require('../images/Profile2.png')} style={styles.avatar} />
                    </View>
                    <View style={styles.centerContent}>
                        <Text style={styles.nameRecord02}>{item.name}</Text>
                        <Text style={styles.position03}>{item.position}</Text>
                    </View>
                    <View style={styles.infoStatus}>
                        <Text style={styles.position}>{item.time}</Text>
                        <Text style={[styles.timerTex02, { marginTop: 5 }]}>07</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={styles.containerRecordsTabs}>
                    <Image source={require('../images/HomeBg4.jpeg')} style={styles.image3Home} />
                    <View style={styles.overlay}>
                        <View style={styles.bgMainHome}>
                            <View style={styles.viewFlexHeader}>
                                <TouchableOpacity onPress={handleBackPress}>
                                    <BtnBack />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.viewFlexCenter]}>
                                <Text style={styles.textContentAdmin}>Employee Chat</Text>
                            </View>
                            <View style={[styles.viewFlexHeader]}></View>
                        </View>
                        <View style={[styles.searchBg]}>
                            <SearchIcon />
                            <TextInput placeholder="Search Employees" placeholderTextColor="white" style={styles.view02Margin} />
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 15 }}>
                        <FlatList
                            data={employees}
                            keyExtractor={(item) => item.id}
                            renderItem={renderEmployee}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AllChatsUser;
