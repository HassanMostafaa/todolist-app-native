import { Text, View, Platform } from "react-native";
import { style } from "./style/TestComp.style";

export const TestComp = (): JSX.Element => (
  <View style={style.container}>
    <Text>Test Comp import {Platform.OS}</Text>
  </View>
);
