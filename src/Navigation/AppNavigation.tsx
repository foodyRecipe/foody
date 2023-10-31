import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import Stack from './Stack'
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})
