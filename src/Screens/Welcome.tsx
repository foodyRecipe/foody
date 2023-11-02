import React, { useEffect } from "react"
import { View, Text, Image } from "react-native"
import { WelcomeStack } from "../types/stackParam"
import { StatusBar } from "expo-status-bar"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

const Welcome = ({navigation}: WelcomeStack) => {
 
  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
    setTimeout(() => navigation.navigate("Home"), 2500)
  },[])

  return (
    <View className="flex-1 justify-center items-center gap-y-10 bg-amber-500">
      {/* logo image and rings */}
      <View className="bg-white/20 rounded-full" style={{padding: wp(8.5)}}>
        <View className="bg-white/20 rounded-full" style={{padding: wp(7)}}>
          <Image source={require("../../assets/images/welcome.png")}
          style={{width: wp(50), height: wp(50)}}
          />
        </View>
      </View>
      {/* title and text */}
      <View className="gap-y-3 items-center">
        <Text className="text-white font-bold tracking-widest" style={{fontSize: wp(12)}}>Foody</Text>
        <Text className="text-white font-medium tracking-widest" style={{fontSize: wp(5)}}>Food is always right</Text>
      </View>
      <StatusBar style={"auto"}/>
    </View>
  )
}

export default Welcome