import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreens from '../screens/onboarding';
import LoginScreens from '../screens/login';
import TabNavigation from './tab-navigation';
import DetailBeritaScreens from '../screens/berita/detail-berita';
import BedList from '../screens/beds';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="onboarding" component={OnboardingScreens} />
        <Stack.Screen name="login" component={LoginScreens} />
        <Stack.Screen name="home" component={TabNavigation} />
        <Stack.Screen name="detail-berita" component={DetailBeritaScreens} />
        <Stack.Screen name="beds" component={BedList} />
        {/* <Stack.Screen name="detail berita" component={DetailBerita} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;

const styles = StyleSheet.create({});
