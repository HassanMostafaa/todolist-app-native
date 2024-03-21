import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  title: {
    paddingHorizontal: 36,
    marginTop: 28,
    marginBottom: 70,
    color: "#333",
    fontFamily: "Roboto-Condensed-Light",
    fontSize: 80,
    letterSpacing: -5,
  },
  progressBar: {
    top: 0,
    left: 0,
    height: 5,
    width: "100%",
    backgroundColor: "#FFDBA1",
    borderBottomWidth: 1,
  },
});
