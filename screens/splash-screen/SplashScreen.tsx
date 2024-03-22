import { Text, View, Animated } from "react-native";
import { style } from "./styles/SplashScreen.style";
import { useFonts } from "expo-font";
import { DisplayCard } from "../../components/display-card/DisplayCard";
import * as Progress from "react-native-progress";
import { useEffect, useState } from "react";

function SplashScreen() {
  const [fontLoaded] = useFonts({
    "Roboto-Condensed-Thin": require("../../assets/fonts/RobotoCondensed-Thin.ttf"),
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Medium.ttf"),
    "Roboto-Condensed-Light": require("../../assets/fonts/RobotoCondensed-Light.ttf"),
  });
  const [loaderValue, setLoaderValue] = useState<number>(0.1);

  useEffect(() => {
    setInterval(() => {
      setLoaderValue((prev) => prev + 0.1);
    }, 200);
  }, []);
  return (
    <View style={style.container}>
      <Progress.Bar
        progress={loaderValue}
        width={null}
        borderWidth={0}
        borderRadius={0}
        height={4}
        color="#ffb53f"
      />
      <Text style={style.title}>
        You suck at taking notes brother, you need us :)
      </Text>
      <View
        style={{
          transform: "rotate(-8deg) scale(2)",
          position: "relative",
          left: "50%",
          paddingHorizontal: 12,
        }}
      >
        <DisplayCard
          category="Fitness"
          title={"Splash screen diaply card"}
          createdAt={new Date()}
          text={
            "Don't mind this minor text just a placeholder just for show on the splash screen. only five centuries, but also"
          }
          key={"1"}
          noteColor={"#FFDBA1"}
        />
      </View>
      <View
        style={{
          transform: "rotate(-8deg) scale(2) translateX(50px)",
          position: "relative",
          left: "80%",
          marginTop: 0,
        }}
      >
        <DisplayCard
          category="Personal"
          key={"2"}
          title={"Splash screen diaply card"}
          createdAt={new Date()}
          text={
            "Don't mind this minor text just a placeholder just for show on the splash screen."
          }
          noteColor={"#B7E0F6"}
        />
      </View>
    </View>
  );
}

export default SplashScreen;
