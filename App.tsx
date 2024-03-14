import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TestComp } from "./components/test-comp/TestComp";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto Condensed": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
  });
  return (
    <SafeAreaView style={style.safeContainer}>
      <View style={style.mainContainer}>
        <TestComp />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    // color: "red",
    // fontFamily: "Roboto Condensed",
  },
});
