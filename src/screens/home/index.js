import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import HomeContainer from '../../features/home'

import { sizes } from '../../constants/theme';

const HomeScreens = () => {
  const navigation = useNavigation();
  
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTransparent: true,
      headerLeft: () => {
        return (
          <Image
            source={require('../../assets/icons/logo_app_white.png')}
            style={styles.logo}
          />
        );
      },
      headerRight: () => {
        return (
          <Text white bold marginRight={sizes.base}>
            Bireuen Emergency Call 911
          </Text>
        );
      },
    });
  }, []);
  
  return (
    <HomeContainer />
  )
}

export default HomeScreens;

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 40,
    objectFit: 'contain',
    margin: sizes.base,
  },
});