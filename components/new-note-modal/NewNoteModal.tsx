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
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
  setShowNewNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: ICategory;
  setSelectedCategory: React.Dispatch<React.SetStateAction<ICategory>>;
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
  setNotes,
  selectedCategory,
  setSelectedCategory,
}) => {
  const closeModal = (): void => setShowNewNoteModal(false);

  const [note, setNote] = useState<INote>({
    category: selectedCategory,
    createdAt: new Date(),
    text: "",
    title: "",
    noteColor: "#A3FF94",
  });

  const addNote = (): void => {
    console.log({ note });

    setNotes((prev) => [...prev, note]);
    setNote({
      category: selectedCategory,
      createdAt: new Date(),
      text: "",
      title: "",
      noteColor: "#A3FF94",
    });
    setTimeout(() => {
      setShowNewNoteModal(false);
    }, 0);
  };

  const colors: INoteColor[] = ["#A3FF94", "#B7E0F6", "#C9AAF0", "#FFDBA1"];

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
            {/* <Text style={{ marginLeft: 12 }}>Note Category</Text> */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories?.map((category, index) => (
                <CategoryButton
                  key={index}
                  label={category}
                  selectedCategory={selectedCategory}
                  onPress={() => {
                    setSelectedCategory(category),
                      setNote((prev) => ({ ...prev, category }));
                  }}
                />
              ))}
            </ScrollView>
          </View>
          <View style={style({}).colorsContainer}>
            {colors.map((color, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  setNote((prev) => ({ ...prev, noteColor: color }))
                }
                style={
                  style({
                    colorSelector: color,
                    colorSelected: color === note.noteColor,
                  }).color
                }
              ></Pressable>
            ))}
          </View>
          <TextInput
            style={style({}).input}
            keyboardType="default"
            placeholder="Note Subject (Optional)"
            autoCapitalize="none"
            autoCorrect={false}
            value={note.title}
            onChangeText={(title) => setNote((prev) => ({ ...prev, title }))}
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
              value={note.text}
              onChangeText={(text) => setNote((prev) => ({ ...prev, text }))}
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
            onPress={() => addNote()}
            style={[style({}).callToAction, { backgroundColor: "#a2cffe" }]}
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

const style = ({
  isCategorySelected,
  colorSelector,
  colorSelected,
}: {
  isCategorySelected?: boolean;
  colorSelector?: string;
  colorSelected?: boolean;
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    input: {
      marginBottom: 12,
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
      paddingTop: 12,
    },
    categoryButton: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginHorizontal: 5,
      marginVertical: 12,
      borderRadius: 5,
      borderWidth: 1,
      justifyContent: "center",
      borderColor: "#999",
      alignItems: "center",
      backgroundColor: isCategorySelected ? "#a2cffe" : "transparent",
    },
    categoryButtonText: {
      fontFamily: "Roboto-Condensed",
    },
    callToActionContainer: {
      display: "flex",
      flexDirection: "row",
    },
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
    colorsContainer: {
      display: "flex",
      flexDirection: "row",
      paddingLeft: 12,
    },
    color: {
      width: 30,
      height: 30,
      backgroundColor: colorSelector,
      marginBottom: 12,
      marginRight: 5,
      borderRadius: 999,
      borderWidth: colorSelected ? 5 : 1,
      borderColor: "#333",
    },
  });
