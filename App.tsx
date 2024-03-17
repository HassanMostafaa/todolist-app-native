import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, SafeAreaView } from "react-native";
import SplashScreen from "./screens/splash-screen/SplashScreen";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

export default function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [fontLoaded] = useFonts({
    "Roboto-Condensed-Thin": require("./assets/fonts/RobotoCondensed-Thin.ttf"),
    "Roboto-Condensed": require("./assets/fonts/RobotoCondensed-Medium.ttf"),
    "Roboto-Condensed-Light": require("./assets/fonts/RobotoCondensed-Light.ttf"),
  });

  const loadSplashScreen = (): void => {
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  };
  useEffect(() => {
    loadSplashScreen();
  }, []);
  return (
    <SafeAreaView style={style.safeContainer}>
      <View style={style.mainContainer}>
        {/* {!isLoaded && <SplashScreen />} */}
        <SplashScreen />
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
