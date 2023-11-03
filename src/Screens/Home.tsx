import React, { useEffect } from "react"
import { View, Text, ScrollView, SafeAreaView, Image, TextInput } from "react-native"
import { HomeStack } from "../types/stackParam"
import { styles } from "../theme"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import {BellIcon} from "react-native-heroicons/outline"
import { StatusBar } from "expo-status-bar"

const Home = ({navigation}: HomeStack) => {

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  return (
    <View className="flex-1 bg-white/30">
      <StatusBar style={"auto"}/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50}}>
        {/* avatar and bell icon */}
        <SafeAreaView style={styles.androidArea} className="flex-row items-center justify-between mx-4 mb-2">
          <Image source={require("../../assets/images/avatar.png")} 
          style={{width: hp(5.5), height: hp(5)}}/>
          <BellIcon size={hp(4)} color="gray"/>
        </SafeAreaView>
        {/* greetings and punchline */}
        <View className="gap-y-4 mx-4 pt-4">
          <Text className="text-neutral-600 tracking-wider" style={{fontSize: hp(2)}}>Hey Jamiu</Text>
          <View>
            <Text className="text-neutral-600 font-semibold tracking-widest" style={{ fontSize: hp(4)}}>Make your own food,</Text>
          </View>
          <View>
            <Text className="text-neutral-600 font-semibold tracking-widest" style={{ fontSize: hp(4) }}>Stay at
            <Text className="text-amber-400"> home</Text>
            </Text>
          </View>
        </View>
        {/* search bar */}
        <View className="flex-row items-center mx-4 rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"gray"}
            style={{fontSize: hp(2)}}
            className="flex-1 text-base pl-3 tracking-wider"
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home