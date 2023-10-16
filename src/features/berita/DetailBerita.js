import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Image, Dimensions} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text} from '../../components';
import {colors, sizes} from '../../constants/theme';
// import {WebView} from 'react-native-webview';
// import AutoHeightWebView from 'react-native-autoheight-webview'
import HTML from 'react-native-render-html';

const {width, height} = Dimensions.get('window');

const DetailBerita = () => {
  const route = useRoute();
  // const [detail, setDetail] = useState({
  //   image: '',
  //   html: ``,
  // });

  // useEffect(() => {
  //   setDetail({...detail, ...route.params.detail.detail});
  // }, [route.params.detail]);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.containerThumbnail}>
          <Image
            source={
              route.params.detail.thumbnail == ''
                ? require('../../assets/no-image.png')
                : route.params.detail.thumbnail
            }
            style={styles.imgThumbnail}
          />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.kategori}>
            <Text bold white>
              Informasi
            </Text>
          </View>
          <Text bold color={colors.secondary}>
            {route.params.detail.date}
          </Text>
          <Text h2 bold style={{marginVertical: 10, textAlign: 'justify'}}>
            {route.params.detail.title}
          </Text>
          {/* <HTMLView
            value={`<body>${route.params.detail.content.replace(
              /(\r\n|\n|\r)/gm,
              '',
            )}</body>`}
            // stylesheet={htmlStyle}
          /> */}
          <HTML
            source={{
              html: `<body">${route.params.detail.content.replace(/(\r\n|\n|\r)/gm,'')}</body>`,
            }}
            style={{
              width: width - sizes.base * 2,
              backgroundColor: 'rgba(0,0,0,0)',
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailBerita;

// const htmlStyle = StyleSheet.create({
//   p: {
//     textAlign: 'justify',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerThumbnail: {
    width: width,
    height: height / 3,
  },
  imgThumbnail: {
    flex: 1,
    width: width,
    // height:height/3,
    resizeMode: 'cover',
  },
  bodyContainer: {
    flex: 1,
    minHeight: height - height / 3,
    padding: sizes.base,
  },
  kategori: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: -15,
    right: sizes.base,
    zIndex: 999,
  },
});
