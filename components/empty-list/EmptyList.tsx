import { useFonts } from "expo-font";
import { View, Text, StyleSheet, Image } from "react-native";
const emptyListImg = require("./../../assets/emptyListImg.png");

const EmptyList = () => {
  const [fontLoaded] = useFonts({
    "Roboto-Condensed-Thin": require("../../assets/fonts/RobotoCondensed-Thin.ttf"),
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Medium.ttf"),
    "Roboto-Condensed-Light": require("../../assets/fonts/RobotoCondensed-Light.ttf"),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No notes created yet</Text>
      {/* <View style={styles.imageContainer}>
        <Image source={emptyListImg} style={styles.image} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center", // Center content vertically
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontFamily: "Roboto-Condensed-Light",
    letterSpacing: -1,
  },
  imageContainer: {
    marginTop: 32,
    shadowColor: "#555555be",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 2, // For Android elevation
  },
  image: {
    borderRadius: 999,
    width: 200,
    height: 200,
  },
});

export default EmptyList;
