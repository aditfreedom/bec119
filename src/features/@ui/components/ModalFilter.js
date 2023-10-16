import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors, sizes} from '../../../constants/theme';
import Text from './Text';
import Input from './Input';

const {width, height} = Dimensions.get('window');

const ModalFilter = ({visible, onRequestClose, searchFilter, children}) => {
  return (
    <Modal
      visible={visible}
      animationType={'slide'}
      onRequestClose={onRequestClose}
      transparent={true}>
      <ScrollView style={{flex: 1}} scrollEnabled={false}>
        {/* <TouchableWithoutFeedback style={{flex:1}} onPress={onRequestClose}> */}
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.title}>
                <Text h2 bold color={colors.secondary}>
                  Pencarian Filter
                </Text>
                <TouchableOpacity onPress={onRequestClose}>
                  <Icon name="close" size={30} color="black" />
                </TouchableOpacity>
              </View>
              <ScrollView
                style={{flex: 0.5}}
                showsVerticalScrollIndicator={false}>
                <View style={styles.bodyFilter}>{children}</View>
              </ScrollView>
            </View>
          </View>
        {/* </TouchableWithoutFeedback> */}
      </ScrollView>
    </Modal>
  );
};

export default ModalFilter;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    height: height,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  modalContent: {
    flex: 0.4,
    width: width,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: sizes.base,
    elevation:5
  },
  title: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: sizes.base,
  },
  bodyFilter: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: sizes.base,
  },
});
