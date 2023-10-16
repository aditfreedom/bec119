import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Text from './Text';
import {colors} from '../../../constants/theme';

const Input = props => {
  const renderIcon = () => {
    if (!props?.icon) {
      return null;
    }

    return (
      <View style={styles.icon}>
        {/* {props.icon} */}
        {props.icon}
      </View>
    );
  };

  const renderRightIcon = () => {
    if (!props?.rightIcon) {
      return null;
    }

    return (
      <View style={styles.rightIcon}>
        {/* {props.icon} */}
        {props.rightIcon}
      </View>
    );
  };

  const renderLabel = () => {
    if (!props.label) {
      return null;
    }

    return (
      <View style={styles.label}>
        <Text style={props?.labelStyle}>{props.label}</Text>
      </View>
    );
  };

  console.log('secure',props?.secureTextEntry)
  
  return (
    <>
      {renderLabel()}
      <View style={styles.input}>
        {renderIcon()}
        <TextInput
          style={[props.style]}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={props.inputType}
          onChangeText={text => props.onChange(props.name, text)}
          paddingLeft={props.icon ? 55 : 10}
          paddingRight={10}
          {...props}
        />
        {renderRightIcon()}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    padding: 5,
    backgroundColor: colors.orange,
    top: 7,
    left: 10,
    zIndex: 999999,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  rightIcon: {
    position: 'absolute',
    padding: 5,
    backgroundColor: colors.orange,
    top: 7,
    right: 10,
    zIndex: 999999,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  label: {
    flex: 0.5,
    justifyContent: 'center',
  },
});

export default Input;
