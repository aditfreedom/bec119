import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Input, Text} from '../@ui/components';
import {colors, sizes} from '../../constants/theme';
import berita from '../../constants/berita';
import Icon from 'react-native-vector-icons/Ionicons';
import BeritaItem from './component/KabarItem';
import BeritaHighlightedItem from './component/berita-hightlighted-item';

const {width, height} = Dimensions.get('window');

const Berita = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState({
    keyword: '',
    kategori: '1',
  });
  const [data, setData] = useState([...berita]);

  const onChange = (name, text) => {
    setSearch({...search, [name]: text});
  };

  const renderItem = ({index, item}) => {
    return (
      <View style={styles.card} key={index + ''}>
        <TouchableOpacity
          onPress={() => navigation.navigate('detail berita', {detail: item})}
          activeOpacity={0.8}>
          <BeritaItem data={item} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderHighlight = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('detail berita', {detail: item})}
        activeOpacity={0.8}>
        <BeritaHighlightedItem data={item} />
      </TouchableOpacity>
    );
  };

  const renderKategori = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index + ''}
        style={[
          styles.itemKategori,
          search.kategori == index
            ? styles.activeKategori
            : styles.inActiveKategori,
        ]}
        onPress={() => setSearch({...search, kategori: index})}
        activeOpacity={0.8}>
        <Text size={10} color={search.kategori == index ? 'white' : 'black'}>
          RSUD Fauziah {index + 1}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.searchInput}>
          <Input
            name="keyword"
            value={search.keyword}
            onChange={onChange}
            style={styles.input}
            placeholder="Cari Berita Seputar Rumah Sakit Disini"
          />
          <TouchableOpacity style={{flex: 0.1, justifyContent: 'center'}}>
            <Icon name="search" size={25} color={colors.blue} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={renderKategori}
        keyExtractor={(item, index) => index + ''}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerKategori}
      />

      <FlatList
        data={data}
        renderItem={renderHighlight}
        keyExtractor={(item, index) => index + ''}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.highlightedContainer}
      />

      <FlatList
        data={[...data, ...data]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index + ''}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerBeritaList}
      />
    </View>
  );
};

export default Berita;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: sizes.base,
    gap: sizes.base,
  },
  searchBar: {
    flexDirection: 'row',
    height: height / 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizes.base,
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.blue,
  },
  input: {
    flex: 1,
    margin: 0,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
    marginBottom: sizes.base,
    paddingTop: sizes.base,
    paddingHorizontal: sizes.base,
  },
  containerKategori: {
    borderWidth: 1,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.base,
  },
  itemKategori: {
    minWidth: width / 5,
    marginRight: sizes.base,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: colors.secondary,
    borderRadius: 50,
  },
  activeKategori: {
    backgroundColor: colors.secondary,
  },
  inActiveKategori: {
    backgroundColor: 'white',
  },

  containerBeritaList: {
    paddingHorizontal: sizes.base,
    paddingBottom: 100,
  },

  highlightedContainer:{
    gap: sizes.base,
    height: 410,
    paddingVertical:2,
    paddingHorizontal: sizes.base,
  }
});
