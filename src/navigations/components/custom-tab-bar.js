import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

import {colors, sizes} from '../../constants/theme';
import {Text} from '../../features/@ui/components';

const {width: screenWidth, height} = Dimensions.get('window');

const CustomTabBar = ({state, descriptors, navigation}) => {
  const onPress = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({name: route.name, merge: true});
    }
  };

  const onLongPress = route => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const renderIcon = (route, isFocused) => {
    let iconName = '';
    if (route.name === 'tab-home') {
      iconName = isFocused ? 'home' : 'home-outline';
    } else if (route.name === 'tab-berita') {
      iconName = 'newspaper-sharp';
    } else if (route.name === 'faq') {
      iconName = 'logo-wechat';
    } else if (route.name === 'profile') {
      iconName = 'person-circle';
    } else if (route.name === 'rujukan') {
      return <Icon2 name={'ambulance'} size={30} color={'white'} />;
    }

    return (
      <Icon
        name={iconName}
        size={25}
        color={isFocused ? colors.primary : colors.gray}
      />
    );
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={() => onPress(route, isFocused)}
            onLongPress={() => onLongPress(route, isFocused)}
            style={[styles.tabItem, index == 2 && styles.activeTab]}>
            {renderIcon(route, isFocused)}

            {index !== 2 && (
              <Text
                caption
                bold
                color={isFocused ? colors.primary : colors.gray}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    height: 60,
    backgroundColor: 'white',
    elevation: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.base / 2,
  },
  activeTab: {
    flex: 1.2,
    height: 72,
    position: 'relative',
    bottom: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding: 0,
    marginHorizontal: sizes.base,
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 5,
  },
});
