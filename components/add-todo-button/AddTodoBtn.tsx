import { useFonts } from "expo-font";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./styles/AddTodoBtn.style";

function AddTodoBtn({
  setShowNewNoteModal,
}: {
  setShowNewNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [fontLoaded] = useFonts({
    "Roboto-Condensed-Thin": require("../../assets/fonts/RobotoCondensed-Thin.ttf"),
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Medium.ttf"),
    "Roboto-Condensed-Light": require("../../assets/fonts/RobotoCondensed-Light.ttf"),
  });
  return (
    <View style={style.header}>
      <Text style={style.headerText}>Your Notes</Text>
      <TouchableOpacity onPress={() => setShowNewNoteModal((prev) => !prev)}>
        <Text style={style.addBtn}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddTodoBtn;
