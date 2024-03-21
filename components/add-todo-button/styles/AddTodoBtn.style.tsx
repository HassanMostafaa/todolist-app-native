import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingBottom: 12,
    paddingTop: 12,
  },
  headerText: {
    fontFamily: "Roboto-Condensed-Light",
    fontSize: 64,
  },
  addBtn: {
    fontFamily: "Roboto-Condensed-Thin",
    fontSize: 50,
    borderWidth: 2,
    borderColor: "#333",
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    lineHeight: 55, // Adjusted to match the height of the container
    textAlign: "center",
  },
});
