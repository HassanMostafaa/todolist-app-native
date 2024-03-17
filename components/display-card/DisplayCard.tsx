import { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { formatDate } from "../../helpers/date-helper";
import { useFonts } from "expo-font";
import style from "./styles/DisplayCard.style";

export const DisplayCard: FunctionComponent<IDisplayCard> = ({
  createdAt,
  text,
  title,
  icon,
  noteColor,
}) => {
  const [fontLoaded] = useFonts({
    "Roboto-Condensed-Thin": require("../../assets/fonts/RobotoCondensed-Thin.ttf"),
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Medium.ttf"),
    "Roboto-Condensed-Light": require("../../assets/fonts/RobotoCondensed-Light.ttf"),
  });
  const font = style({}).font;
  return (
    <View style={[style({ noteColor }).container]}>
      {/* <Text>{noteColor}</Text> */}
      <View style={style({}).cardHeader}>
        {title && <Text style={[font, style({}).cardTitle]}>{title}</Text>}
        {createdAt && (
          <Text style={[font, style({}).date]}>{formatDate(createdAt)}</Text>
        )}
      </View>
      {text && <Text style={[font, style({}).cardText]}>{text}</Text>}
    </View>
  );
};
