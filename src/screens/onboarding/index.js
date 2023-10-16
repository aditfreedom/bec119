import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from '../../features/@ui/components';
import { sizes } from '../../constants/theme';

const OnboardingScreens = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          resizeMode="cover"
          style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/icons/logo_app.png')}
              style={styles.logo}
            />
            <Text center title bold>
              {`BEC - 911\nBireuen Emergency Call 911`}
            </Text>
          </View>

          <View style={styles.footer}>
            <Text center bold>
              {`Aplikasi Resmi\nSistem Penanggulangan Gawat Darurat Terpadu\nKabupaten Bireuen`}
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default OnboardingScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex:1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    gap:10
  },
  logo: {
    height: 171,
    width: 171,
    objectFit: 'contain',
  },
  footer:{
    marginBottom: sizes.base
    // flex:1,
  }
});
