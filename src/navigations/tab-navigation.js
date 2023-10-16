import React, {useEffect} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors, sizes} from '../constants/theme';
import Home from '../screens/home';
import {Text} from '../features/@ui/components';
import CustomTabBar from './components/custom-tab-bar';
import BeritaScreens from '../screens/berita';

const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const TabNavigation = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="tab-home" component={Home} options={{title:'Home'}} />
      <Tab.Screen name="tab-berita" component={BeritaScreens} options={{title:'Berita'}} />
      <Tab.Screen name="rujukan" component={Home} />
      <Tab.Screen name="faq" component={Home} />
      <Tab.Screen name="profile" component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
