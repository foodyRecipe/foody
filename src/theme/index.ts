import { Platform, StyleSheet } from "react-native";

const android = Platform.OS === "android"

export const styles = StyleSheet.create({
  androidArea:{
    paddingTop: android ? 40 : 0
  }
})