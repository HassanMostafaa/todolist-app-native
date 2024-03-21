import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import { style } from "./styles/AddTodoBtn.style";

function AddTodoBtn() {
  const [fontLoaded] = useFonts({
    "Roboto-Condensed-Thin": require("../../assets/fonts/RobotoCondensed-Thin.ttf"),
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Medium.ttf"),
    "Roboto-Condensed-Light": require("../../assets/fonts/RobotoCondensed-Light.ttf"),
  });
  return (
    <View style={style.header}>
      <Text style={style.headerText}>Your Notes</Text>
      <Text style={style.addBtn}>+</Text>
    </View>
  );
}

export default AddTodoBtn;
