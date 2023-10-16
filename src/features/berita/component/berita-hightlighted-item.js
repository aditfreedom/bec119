import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {sizes, colors} from '../../../constants/theme';
import {Text} from '../../@ui/components';

const {width, height} = Dimensions.get('window');

const BeritaHighlightedItem = ({data}) => {
  return (
    <View style={styles.container}>
      <Image source={data.thumbnail} style={styles.img} />

      <View
        style={{
          paddingHorizontal: sizes.base,
          paddingVertical: sizes.base/3,
        }}>
        <Text bold caption numberOfLines={3}>
          {data.title}
        </Text>
      </View>
    </View>
  );
};

export default BeritaHighlightedItem;

const styles = StyleSheet.create({
  container: {
    height: 196,
    width: 190,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: sizes.radius,
    elevation:5
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginRight: 10,
  },
  btnKategori: {
    backgroundColor: colors.secondary,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
