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
import {Text} from '../../features/@ui/components';

const {width} = Dimensions.get('window');

const BedListContainer = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      resizeMode="cover"
      style={styles.container}>
      <Text
        title
        bold
        center>{`Ketersediaan Ruang Perawatan\nRSU. DR. Fauziah Bireuen`}</Text>

      <View style={styles.card}>
        <View style={styles.class}>
          <Text center white bold h3>{`Kelas\n1`}</Text>
        </View>
        <View style={{flex: 1, gap: sizes.base / 4}}>
          <View style={styles.row}>
            <Text bold caption>Total Kamar</Text>
            <Text bold caption>13</Text>
          </View>
          <View style={styles.row}>
            <Text bold caption>Tersedia</Text>
            <Text bold caption>13</Text>
          </View>
          <View style={styles.row}>
            <Text bold caption>Last Update</Text>
            <Text bold caption>12 Desember 2023</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.class}>
          <Text center white bold h3>{`Kelas\n2`}</Text>
        </View>
        <View style={{flex: 1, gap: sizes.base / 4}}>
          <View style={styles.row}>
            <Text bold caption>Total Kamar</Text>
            <Text bold caption>13</Text>
          </View>
          <View style={styles.row}>
            <Text bold caption>Tersedia</Text>
            <Text bold caption>13</Text>
          </View>
          <View style={styles.row}>
            <Text bold caption>Last Update</Text>
            <Text bold caption>12 Desember 2023</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.class}>
          <Text center white bold h3>{`Kelas\n3`}</Text>
        </View>
        <View style={{flex: 1, gap: sizes.base / 4}}>
          <View style={styles.row}>
            <Text bold caption>Total Kamar</Text>
            <Text bold caption>13</Text>
          </View>
          <View style={styles.row}>
            <Text bold caption>Tersedia</Text>
            <Text bold caption>13</Text>
          </View>
          <View style={styles.row}>
            <Text bold caption>Last Update</Text>
            <Text bold caption>12 Desember 2023</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default BedListContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: sizes.base,
    paddingVertical: sizes.base,
    width: width,
  },
  card: {
    flexDirection: 'row',
    gap: sizes.base / 2,
    backgroundColor: 'white',
    borderRadius: sizes.radius,
    paddingVertical: sizes.base / 2,
    paddingHorizontal: sizes.base / 1.5,
    marginHorizontal: sizes.base,
    elevation: 5,
  },
  class: {
    height: 80,
    width: 100,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radius,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
