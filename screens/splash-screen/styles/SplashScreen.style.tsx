import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 36,
    backgroundColor: "#f4f4f4",
    width: "100%",
  },
  title: {
    marginTop: 28,
    marginBottom: 70,
    color: "#333",
    fontFamily: "Roboto-Condensed-Light",
    fontSize: 80,
    letterSpacing: -5,
  },
  progressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 5,
    width: "100%",
    backgroundColor: "red",
  },
});
