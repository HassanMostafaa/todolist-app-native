import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TestComp } from "./components/test-comp/TestComp";

export default function App() {
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
  },
});
