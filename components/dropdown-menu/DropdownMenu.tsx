import { useFonts } from "expo-font";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface DropdownMenuProps {
  options: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
  selectedCategory: string | null;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  setSelectedCategory,
  selectedCategory,
}) => {
  const [fontLoaded] = useFonts({
    "Roboto-Condensed-Thin": require("../../assets/fonts/RobotoCondensed-Thin.ttf"),
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Medium.ttf"),
    "Roboto-Condensed-Light": require("../../assets/fonts/RobotoCondensed-Light.ttf"),
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string) => {
    setSelectedCategory(option);
    setIsOpen(false);
    console.log("selected option", option);
  };

  return (
    <View style={{ position: "relative" }}>
      <TouchableOpacity
        style={{
          borderRadius: 4,
          backgroundColor: "#e6e6e6",
          padding: 12,
          marginHorizontal: 32,
          //   width: "40%",
          flexDirection: "row", // Align items in a row
          justifyContent: "space-between", // Space between text and arrow
          alignItems: "center", // Vertically center items
        }}
        onPress={toggleDropdown}
      >
        <Text
          style={{
            backgroundColor: "#e6e6e6",
            fontFamily: "Roboto-Condensed-Light",
            fontSize: 18,
          }}
        >
          {selectedCategory || "All"}
        </Text>
        <Text>{isOpen ? "ᐱ" : "ᐯ"}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View
          style={{
            position: "relative",
            top: 0,
            marginHorizontal: 32,
            right: 0,
            backgroundColor: "#fff",
            // borderRadius: 4,
            elevation: 4,
          }}
        >
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectOption(option)}
            >
              <Text
                style={{
                  padding: 10,
                  fontFamily:
                    selectedCategory === option
                      ? "Roboto-Condensed"
                      : "Roboto-Condensed-Light",
                }}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default DropdownMenu;
