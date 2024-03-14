import { Text, View, Platform } from "react-native";
import { style } from "./style/TestComp.style";
import { useFonts } from "expo-font";

export const TestComp = (): JSX.Element => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Test Comp import {Platform.OS}</Text>
    </View>
  );
};
