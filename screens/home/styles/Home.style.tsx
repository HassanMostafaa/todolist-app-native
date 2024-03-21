import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get("window").width;
export const style = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
  },
  separator: {
    // height: 10,
    backgroundColor: "#ddd", // Separator color
  },
  flatList: {
    padding: 32,
    paddingVertical: 12,
    borderWidth: 1,
    flexGrow: 1,
  },
});
