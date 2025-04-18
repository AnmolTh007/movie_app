import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'

const index = () => {
  return (
   <View className='flex-1 bg-primary'>
    <Image source={images.bg} className="absolute w-full z-0"/>

    <ScrollView
   </View>
  )
}

export default index

const styles = StyleSheet.create({})