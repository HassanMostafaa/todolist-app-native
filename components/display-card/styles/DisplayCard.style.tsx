import { StyleSheet } from "react-native";

const style = ({ noteColor }: { noteColor?: INoteColor }) =>
  StyleSheet.create({
    font: {
      fontFamily: "Roboto-Condensed-Light",
      color: "#333",
    },
    container: {
      borderWidth: 1,
      borderColor: "#333333d8",
      backgroundColor: noteColor ?? "white",
      padding: 12,
      flexGrow: 1,
      flexShrink: 1,
      borderRadius: 8,
      shadowColor: "#555",
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      // transform: "rotate(-8deg)",
    },
    cardTitle: {
      fontSize: 22,
      fontWeight: "100",
    },

    date: {
      fontSize: 11,
      color: "#666",
      marginTop: 4,
    },
    cardHeader: {
      marginBottom: 24,
    },
    cardText: {
      color: "#888",
    },
  });

export default style;
