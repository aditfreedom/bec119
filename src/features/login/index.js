import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import {colors, sizes} from '../../constants/theme';
import {Button, Input, Text} from '../@ui/components';

const {height: screenHeight} = Dimensions.get('window');

const LoginContainer = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const togglePassword = () => {
    console.log('show');
    setShowPassword(!showPassword);
  };

  const onChange = (name, value) => {
    setForm(prev => ({...prev, [name]: value}));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        resizeMode="cover"
        style={styles.container}>
        <View style={[styles.section, styles.center, {flex: 0.8}]}>
          <Image
            source={require('../../assets/icons/logo_app.png')}
            style={styles.logo}
          />
          <Text center title bold>
            {`BEC - 911\nBireuen Emergency Call 911`}
          </Text>
        </View>

        <View style={[styles.section, {marginBottom: screenHeight / 7}]}>
          <View>
            <Text h1 bold>
              Login
            </Text>
            <Text>Silahkan login untuk masuk aplikasi</Text>
          </View>
          <Input
            name="username"
            value={form.username}
            onChange={onChange}
            style={styles.input}
            placeholder="Email Anda"
          />

          <Input
            name="password"
            value={form.password}
            onChange={onChange}
            style={styles.input}
            placeholder="Password Anda"
            secureTextEntry={showPassword}
            rightIcon={
              <Pressable onPress={togglePassword}>
                {showPassword ? (
                  <Icon name="eye" style={styles.icon} />
                ) : (
                  <Icon name="eye-slash" style={styles.icon} />
                )}
              </Pressable>
            }
          />
          <Text color="red" style={{alignSelf: 'flex-end'}} bold>
            Lupa Kata Sandi?
          </Text>

          <Button style={{backgroundColor:colors.green}} onPress={() => navigation.navigate('home')}>
            <Text white bold h2>
              Login
            </Text>
          </Button>
          <Pressable>
            <Text color={colors.darkGreen} bold center>
              Buat Akun
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight + sizes.base * 5,
    padding: sizes.padding,
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: sizes.base,
  },
  logo: {
    height: 100,
    width: 100,
    objectFit: 'contain',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    paddingHorizontal: sizes.padding,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 16,
    color: colors.secondaryDark,
  },
});
