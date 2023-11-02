import React, { useEffect } from "react"
import { View, Text } from "react-native"
import { HomeStack } from "../types/stackParam"

const Home = ({navigation}: HomeStack) => {
  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Home screen</Text>
    </View>
  )
}

export default Home