import { FunctionComponent } from "react";
import { Text, View } from "react-native";

type DisplayCardProps = {
  title: string;
  createdAt: Date;
  text: string;
  icon?: string;
  noteColor: string;
};

export const DisplayCard: FunctionComponent<DisplayCardProps> = ({
  createdAt,
  text,
  title,
  icon,
  noteColor,
}) => {
  return (
    <View>
      <Text>Display Card</Text>
    </View>
  );
};
