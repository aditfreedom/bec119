import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from '../../@ui/components';
import {colors, sizes} from '../../../constants/theme';
import KabarItem from '../../berita/component/KabarItem';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const BeritaSection = ({data}) => {
  const navigation = useNavigation();

  const renderItem = () => {
    return data.map((item, i) => {
      return (
        <TouchableOpacity
          onPress={()=>navigation.navigate('detail berita', {detail: item})}
          key={i + ''}>
          <KabarItem data={item} key={i + ''} />
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text title color={colors.secondary} bold style={{flex: 1}}>
          KABAR DESA
        </Text>

        <TouchableOpacity
          style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems:'center'}}
          onPress={()=>navigation.navigate('tab-berita')}>
          <Text caption>Lihat Semua</Text>
          <Icon
            name="chevron-forward-outline"
            size={20}
            color={colors.blue}
          />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={[colors.blue, colors.violet]}
        style={styles.line}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      />

      {renderItem()}
    </View>
  );
};

export default BeritaSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    padding: sizes.padding,
    paddingTop:0,
    marginBottom: 100
  },
  line: {
    height: 3,
    marginBottom: sizes.base,
  },
});
