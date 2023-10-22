import React, {useEffect} from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, sizes} from '../../constants/theme';

import BedListContainer from '../../features/beds';

const {width} = Dimensions.get('window');

const BedList = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: colors.primary,
      },
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <BedListContainer />
    </SafeAreaView>
  );
};

export default BedList;
