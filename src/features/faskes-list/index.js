import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, sizes} from '../../constants/theme';
import {Text} from '../../features/@ui/components';

const {width} = Dimensions.get('window');

const FaskesListContainer = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      resizeMode="cover"
      style={styles.container}>
      <Text title bold center>{`Info Faskes Terdekat`}</Text>

      <View style={styles.card}>
        <Image
          style={styles.thumbnail}
          source={require('../../assets/images/rs_fauziah.png')}
          resizeMode="contain"
        />
        <View style={{flex: 1, gap: sizes.base / 4}}>
          <Text bold color={colors.secondary}>
            RSU. DR. Fauziah Bireuen
          </Text>
          <Text bold caption>
            Jl. T. Hamzah Bendahara
          </Text>
          <Text caption>0644 - 21228</Text>
          <View style={styles.tag}>
            <Text white caption bold>RSUD</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.thumbnail}
          source={require('../../assets/images/rs_fauziah.png')}
          resizeMode="contain"
        />
        <View style={{flex: 1, gap: sizes.base / 4}}>
          <Text bold color={colors.secondary}>
            RSU. DR. Fauziah Bireuen
          </Text>
          <Text bold caption>
            Jl. T. Hamzah Bendahara
          </Text>
          <Text caption>0644 - 21228</Text>
          <View style={styles.tag}>
            <Text white caption bold>RSUD</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.thumbnail}
          source={require('../../assets/images/rs_fauziah.png')}
          resizeMode="contain"
        />
        <View style={{flex: 1, gap: sizes.base / 4}}>
          <Text bold color={colors.secondary}>
            RSU. DR. Fauziah Bireuen
          </Text>
          <Text bold caption>
            Jl. T. Hamzah Bendahara
          </Text>
          <Text caption>0644 - 21228</Text>
          <View style={styles.tag}>
            <Text white caption bold>RSUD</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default FaskesListContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: sizes.base,
    paddingVertical: sizes.base,
    width: width,
  },
  card: {
    flexDirection: 'row',
    alignItems:'center',
    gap: sizes.base / 2,
    backgroundColor: 'white',
    borderRadius: sizes.radius,
    paddingVertical: sizes.base / 2,
    paddingHorizontal: sizes.base / 1.5,
    marginHorizontal: sizes.base,
    elevation: 5,
  },
  thumbnail: {
    height: 80,
    width: 100,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radius,
  },
  tag: {
    alignSelf:"flex-start",
    backgroundColor: colors.primary,
    paddingHorizontal: sizes.base/2,
    paddingVertical:2,
    borderRadius: 25,
  },
});
