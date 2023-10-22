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

import FaskesListContainer from '../../features/faskes-list';

const {width} = Dimensions.get('window');

const FaskesList = () => {
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
      <FaskesListContainer />
    </SafeAreaView>
  );
};

export default FaskesList;
