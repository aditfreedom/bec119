import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Icon = ({size=24, src, style, ...props}) => {
  return (
    <Image
      source={src}
      resizeMode="contain"
      style={[{
        height: size,
        width: size,
      }, style]}
      {...props}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({});
