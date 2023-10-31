import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from '../Screens/Welcome'
import { RootStack } from '../types/stackParam'

export const Stacks = createNativeStackNavigator<RootStack>()

const Stack = () => {
  return (
    <Stacks.Navigator initialRouteName='Welcome'>
      <Stacks.Screen name="Welcome" component={Welcome}/>
    </Stacks.Navigator>
  )
}

export default Stack

const styles = StyleSheet.create({})