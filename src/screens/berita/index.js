import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import BeritaContainer from '../../features/berita'

const BeritaScreens = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown:false
    })
  
  }, [])
  

  return (
    <BeritaContainer />
  )
}

export default BeritaScreens

const styles = StyleSheet.create({})