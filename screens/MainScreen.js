import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MainBg, MainLayout} from '../components/layout';
import {COLORS} from '../constant/colors';
import {Btn} from '../components/ui';

const MainScreen = ({navigation}) => {
  return (
    <MainBg style={{flex: 1, backgroundColor: COLORS.black + 90}}>
      <MainLayout>
        <Btn onPress={() => navigation.navigate('ModeScreen')}>START</Btn>
        <Btn onPress={() => navigation.navigate('BookScreen')}>
          Book Of Knowladge
        </Btn>
        <Btn onPress={() => navigation.navigate('ProfileScreen')}>Profile</Btn>
      </MainLayout>
    </MainBg>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  btnStyle: {padding: 20, borderWidth: 1, width: '50%', marginVertical: 20},
  text: {},
});
