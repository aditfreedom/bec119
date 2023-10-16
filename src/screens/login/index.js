import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import LoginContainer from '../../features/login';

const LoginScreens = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <StatusBar hidden />
      <LoginContainer />
    </>
  );
};

export default LoginScreens;
