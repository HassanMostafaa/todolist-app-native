import { useFonts } from "expo-font";
import React from "react";
import { View, Text } from "react-native";
import { styles } from "./EmptyList";

export const EmptyList = () => {
  const [fontLoaded] = useFonts({
    "Roboto-Condensed-Thin": require("../../assets/fonts/RobotoCondensed-Thin.ttf"),
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Medium.ttf"),
    "Roboto-Condensed-Light": require("../../assets/fonts/RobotoCondensed-Light.ttf"),
  });
  return (
    <View style={styles.container}>
      <Image />
      <Text style={styles.text}>No notes created yet</Text>
    </View>
  );
};
