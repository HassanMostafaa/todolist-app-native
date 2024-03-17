import { Text, View } from "react-native";
import { style } from "./styles/SplashScreen.style";
import { useFonts } from "expo-font";
import { DisplayCard } from "../../components/display-card/DisplayCard";
function SplashScreen() {
  const [fontLoaded] = useFonts({
    "Roboto-Condensed-Thin": require("../../assets/fonts/RobotoCondensed-Thin.ttf"),
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Medium.ttf"),
    "Roboto-Condensed-Light": require("../../assets/fonts/RobotoCondensed-Light.ttf"),
  });
  return (
    <View style={style.container}>
      <View style={style.progressBar}></View>
      <Text style={style.title}>
        You suck at taking notes brother, you need us :)
      </Text>
      <View
        style={{
          transform: "rotate(-8deg) scale(2)",
          position: "relative",
          left: "50%",
        }}
      >
        <DisplayCard
          title={"Splash screen diaply card"}
          createdAt={new Date()}
          text={
            "Don't mind this minor text just a placeholder just for show on the splash screen. only five centuries, but also"
          }
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
