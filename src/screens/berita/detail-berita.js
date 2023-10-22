import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import BeritaContainer from '../../features/berita/detail-berita'

const DetailBeritaScreens = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title:'Detail Berita'
    })
  
  }, [])
  

  return (
    <BeritaContainer />
  )
}

export default DetailBeritaScreens

const styles = StyleSheet.create({})