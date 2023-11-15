import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <View className="mx-4 mt-4">
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
      contentContainerStyle={{paddingHorizontal: 15}}
      ></ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})