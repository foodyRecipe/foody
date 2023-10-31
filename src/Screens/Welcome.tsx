import React, { useEffect } from "react"
import { View, Text, Image } from "react-native"
import { WelcomeStack } from "../types/stackParam"
import { StatusBar } from "expo-status-bar"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import Animated, {useSharedValue, withSpring} from "react-native-reanimated"

const Welcome = ({navigation}: WelcomeStack) => {
  const ringPadding1 = useSharedValue(0)
  const ringPadding2 = useSharedValue(0)

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
    ringPadding1.value = 0
    ringPadding2.value = 0
    setTimeout(()=>ringPadding1.value = withSpring(ringPadding1.value+hp(5.5)), 300)
    setTimeout(() => ringPadding2.value = withSpring(ringPadding2.value + hp(5)), 100)
  },[])

  return (
    <View className="flex-1 justify-center items-center gap-y-10 bg-amber-500">
      {/* logo image and rings */}
      <Animated.View className="bg-white/20 rounded-full" style={{padding: ringPadding1}}>
        <Animated.View className="bg-white/20 rounded-full" style={{padding: ringPadding2}}>
          <Animated.Image source={require("../../assets/images/welcome.png")}
          style={{width: wp(50), height: wp(50)}}
          />
        </Animated.View>
      </Animated.View>
      {/* title and text */}
      <View className="gap-y-3 items-center">
        <Text className="text-w \hite font-bold tracking-widest" style={{fontSize: wp(7)}}>Foody</Text>
        <Text className="text-white font-medium tracking-widest" style={{fontSize: wp(2)}}>Food is always right</Text>
      </View>
      <StatusBar style={"light"}/>
    </View>
  )
}

export default Welcome