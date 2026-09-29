import { View, Image, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '../components/logo';
import { styles } from './StyleSheet';
import { useNavigation } from '@react-navigation/native';
import BtnNextAdmin from '../components/BtnNextAdmin';
import { TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const SelectDepartment = (props) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View style={styles.containerAdmin}>

          <Image source={require('../images/AdminScreen2.jpeg')} style={styles.backgroundImage} />

          <View style={styles.adminContainer}>
            <Logo style={styles.logoAdmin} />
            <Text style={styles.textAdmin}>iMed Urgent Care</Text>
            <Text style={styles.text2Admin}>Occupational Safety & Health Service</Text>
          </View>

          <View style={styles.selectDepart}>
            <Text style={styles.textselectDepart}>Select Organization</Text>
            <Text style={styles.text2selectDepart}>Each organization has its own data & record</Text>
          </View>

          <TouchableOpacity onPress={() => props.navigation.navigate('UserFamilyLogin')}>
            <View style={styles.bgMainAdmin}>
              <View>
                <Text style={styles.textContentAdmin}>Family Urgent Care</Text>
                <Text style={styles.text2ContentAdmin}>Occupational Safety & Health Service</Text>
              </View>
              <View style={styles.btnNextAdmin}>
                <BtnNextAdmin />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('UserImedLogin')}>
            <View style={styles.bgMainAdmin}>
              <View>
                <Text style={styles.textContentAdmin}>iMed Urgent Care</Text>
                <Text style={styles.text2ContentAdmin}>Occupational Safety & Health Service</Text>
              </View>
              <View style={styles.btnNextAdmin}>
                <BtnNextAdmin />
              </View>
            </View>
          </TouchableOpacity>
          
          <View style={styles.bottomsContainer01}>
            <TouchableOpacity onPress={() => props.navigation.navigate('SecurityAndPrivacy')}>
              <Text style={styles.text3SercurityAdmin}>Security & Privacy</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectDepartment;
