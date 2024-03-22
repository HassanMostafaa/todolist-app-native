import { FunctionComponent, useState } from "react";
import {
  Modal,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import { categories } from "../../screens/home/Home";

interface IModalProps {
  visible: boolean;
  setShowNewNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type ButtonProps = {
  label: string;
  onPress: () => void;
  selectedCategory: string;
};

export const CategoryButton: React.FC<ButtonProps> = ({
  label,
  onPress,
  selectedCategory,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={
      style({ isCategorySelected: label === selectedCategory }).categoryButton
    }
  >
    <Text
      style={
        style({ isCategorySelected: label === selectedCategory })
          .categoryButtonText
      }
    >
      #{label}
    </Text>
  </TouchableOpacity>
);

export const NewNoteModal: FunctionComponent<IModalProps> = ({
  visible,
  setShowNewNoteModal,
}) => {
  const closeModal = (): void => setShowNewNoteModal(false);

  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    categories[0]
  );

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={visible}
      onRequestClose={closeModal}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={style({}).container}>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories?.map((category, index) => (
                <CategoryButton
                  key={index}
                  label={category}
                  selectedCategory={selectedCategory}
                  onPress={() => setSelectedCategory(category)}
                />
              ))}
            </ScrollView>
          </View>
          <TextInput
            style={style({}).input}
            keyboardType="default"
            placeholder="Note Subject (Optional)"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={{ flex: 1 }}>
            <TextInput
              keyboardType="default"
              placeholder="Content"
              // autoCapitalize="none"
              // autoCorrect={false}
              returnKeyType="done"
              multiline={true}
              blurOnSubmit={true}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              style={[style({}).input, style({}).multiLineInput]}
            />
          </View>
        </View>
        <View style={style({}).callToActionContainer}>
          <Pressable
            style={[style({}).callToAction, { borderWidth: 0 }]}
            onPress={() => {
              setShowNewNoteModal(false);
            }}
          >
            <TouchableOpacity>
              <Text
                style={{ fontFamily: "Roboto-Condensed-Light", fontSize: 20 }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </Pressable>
          <Pressable
            onPress={() => {
              setShowNewNoteModal(false);
            }}
            style={[style({}).callToAction, { backgroundColor: "#cfff47" }]}
          >
            <TouchableOpacity>
              <Text
                style={{ fontFamily: "Roboto-Condensed-Light", fontSize: 20 }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default NewNoteModal;

const style = ({ isCategorySelected }: { isCategorySelected?: boolean }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 12,
    },
    input: {
      marginTop: 24,
      marginHorizontal: 12,
      borderRadius: 4,
      borderWidth: 1,
      paddingHorizontal: 21,
      paddingVertical: 12,
      borderColor: "#999",
      fontFamily: "Roboto-Condensed",
    },
    multiLineInput: {
      flex: 1,
      textAlign: "left",
      textAlignVertical: "center",
    },
    categoryButton: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginHorizontal: 5,
      marginVertical: 12,
      borderRadius: 5,
      borderWidth: 1,
      justifyContent: "center",
      borderColor: "#999",
      alignItems: "center",
      backgroundColor: isCategorySelected ? "#cfff47" : "transparent",
      flex: 0,
    },
    categoryButtonText: {
      flex: 0,
      fontFamily: "Roboto-Condensed",
    },
    callToActionContainer: { display: "flex", flexDirection: "row" },
    callToAction: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 14,

      borderRadius: 8,
      marginHorizontal: 12,
      borderWidth: 1,
      borderColor: "#999",
    },
  });
