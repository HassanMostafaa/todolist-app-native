import { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { formatDate } from "../../helpers/date-helper";
import { useFonts } from "expo-font";
import style from "./styles/DisplayCard.style";

export const DisplayCard: FunctionComponent<INote> = ({
  createdAt,
  text,
  title,
  icon,
  category,
  noteColor,
  id,
}) => {
  const [fontLoaded] = useFonts({
    "Roboto-Condensed-Thin": require("../../assets/fonts/RobotoCondensed-Thin.ttf"),
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Medium.ttf"),
    "Roboto-Condensed-Light": require("../../assets/fonts/RobotoCondensed-Light.ttf"),
  });
  const font = style({}).font;

  if (!fontLoaded) {
    return <View></View>;
  }
  return (
    <View style={[style({ noteColor }).container]}>
      <View style={style({}).cardHeader}>
        {category && (
          <Text
            style={{
              position: "absolute",
              textAlign: "right",
              fontFamily: "Roboto-Condensed-Thin",
              right: 0,
            }}
          >
            {category}
          </Text>
        )}
        {title && <Text style={[font, style({}).cardTitle]}>{title}</Text>}
        {createdAt && (
          <Text style={[font, style({}).date]}>{formatDate(createdAt)}</Text>
        )}
      </View>
      {text && <Text style={[font, style({}).cardText]}>{text}</Text>}
      <Text style={{ fontSize: 12, color: "red" }}>{id && id}</Text>
    </View>
  );
};
