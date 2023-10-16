import React from 'react';
import {StyleSheet, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import { sizes, colors } from "../../../constants/theme";
import { Text } from "../../@ui/components";

const {width, height} = Dimensions.get('window');

const KabarItem = ({data}) => {
  return (
    <View style={styles.container}>
      <Image
        source={data.thumbnail}
        style={styles.img}
      />

      <View
        style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start'}}>
        <Text bold color={colors.secondary}>{ data.date }</Text>
        <Text bold caption numberOfLines={2}>{data.title}</Text>
        <TouchableOpacity style={styles.btnKategori}>
          <Text white bold size={10}>Informasi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default KabarItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom:sizes.base
  },
  img: {
    flex: 0.3,
    resizeMode: 'cover',
    width: width / 4,
    height: width / 5,
    borderRadius:5,
    marginRight: 10,
  },
  btnKategori:{
    backgroundColor: colors.secondary,
    borderRadius: 15,
    paddingHorizontal:5,
    paddingVertical:3,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  }
});
