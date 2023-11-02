import {NativeStackScreenProps} from "@react-navigation/native-stack"

export type RootStack = {
  Welcome: undefined,
  Home: undefined
}

export type WelcomeStack = NativeStackScreenProps<RootStack, "Welcome">
export type HomeStack = NativeStackScreenProps<RootStack, "Home">