import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import Carousel from 'react-native-snap-carousel';

import Carousel from 'react-native-reanimated-carousel';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors, sizes} from '../../constants/theme';
import {Button, Icon, Input, Text} from '../@ui/components';
import berita from '../../constants/berita';
import BeritaSection from './components/berita-section';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const DATA = [
  {
    image:
      'https://kabarbireuen.com/wp-content/uploads/2020/12/IMG-20201208-WA0117-696x392.jpg',
  },
  {
    image:
      'https://kabarbireuen.com/wp-content/uploads/2020/12/IMG-20201202-WA0026-696x392.jpg',
  },
  {
    image:
      'https://kabarbireuen.com/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-28-at-19.47.47-696x385.jpeg',
  },
  {
    image:
      'https://kabarbireuen.com/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-26-at-18.05.28-696x464.jpeg',
  },
  {
    image:
      'https://kabarbireuen.com/wp-content/uploads/2020/11/6e54f8afb53efeaca427a9ef28bb0b96.0-696x392.jpg',
  },
];

const HomeContainer = () => {
  const navigation = useNavigation();

  const renderCarousel = ({item, index}) => {
    return (
      <Image
        source={{uri: item.image}}
        objectFit="cover"
        style={{width: '100%', height: '100%', borderRadius: 5}}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView style={{minHeight: screenHeight}}>
        <ImageBackground
          source={require('../../assets/images/banner.png')}
          resizeMode="cover"
          style={styles.container}>
          <View style={{flex: 1, marginTop: screenHeight / 10}}>
            <View style={styles.row}>
              <Text bold>Hi, Aditya Aziz Fikhri</Text>
              <MaterialIcon
                name="check-decagram"
                color={'blue'}
                style={{fontSize: 15}}
              />
            </View>
            <Text bold>Premium Member</Text>
          </View>
        </ImageBackground>

        <View style={styles.menuContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('beds')}
            style={styles.menuItem}>
            <Icon src={require('../../assets/icons/hospital.png')} size={50} />
            <Text caption bold center marginTop="auto">
              Info Faskes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('beds')}
            style={styles.menuItem}>
            <Icon
              src={require('../../assets/icons/igd.png')}
              size={60}
              style={{resizeMode: 'cover'}}
            />
            <Text caption bold center marginTop="auto">
              Info IGD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('beds')}
            style={styles.menuItem}>
            <Icon src={require('../../assets/icons/room_bed.png')} size={45} />
            <Text caption bold center marginTop="auto">
              Info Kesediaan Tempat Tidur
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('beds')}
            style={styles.menuItem}>
            <Icon src={require('../../assets/icons/doctor.png')} size={45} />
            <Text caption bold center marginTop="auto">
              Konsultasi Dokter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('beds')}
            style={styles.menuItem}>
            <Icon
              src={require('../../assets/icons/medical_check.png')}
              size={50}
            />
            <Text caption bold center marginTop="auto">
              Pendaftaran Pelayanan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('beds')}
            style={styles.menuItem}>
            <Icon
              src={require('../../assets/icons/id_card_successfull.png')}
              size={60}
            />
            <Text caption bold center marginTop="auto">
              Area Member
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bannerContainer}>
          <Carousel
            loop
            width={screenWidth}
            height={screenWidth / 2}
            autoPlay={true}
            data={DATA}
            scrollAnimationDuration={1000}
            mode="parallax"
            renderItem={renderCarousel}
          />
        </View>

        <BeritaSection data={berita} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 40,
    objectFit: 'contain',
    margin: sizes.base,
  },
  container: {
    flexDirection: 'column',
    padding: sizes.padding,
    width: screenWidth,
    height: screenHeight / 4,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.base / 2,
  },

  menuContainer: {
    marginHorizontal: sizes.padding,
    backgroundColor: 'white',
    borderRadius: sizes.radius,
    padding: sizes.padding,
    elevation: 5,

    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: sizes.base / 1.9,
  },
  menuItem: {
    width: screenWidth / 4.2,
    height: screenWidth / 5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

  bannerContainer: {
    height: screenHeight / 4,
    flexDirection: 'row',
    marginVertical: sizes.padding,
  },
});
