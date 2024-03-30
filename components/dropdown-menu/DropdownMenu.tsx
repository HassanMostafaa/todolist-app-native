import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DropdownMenuProps {
  options: ICategory[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<ICategory | null>>;
  selectedCategory: string | null;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  setSelectedCategory,
  selectedCategory,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const toggleDropdown = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
    Animated.timing(fadeAnim, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleSelectOption = (option: ICategory | null) => {
    setSelectedCategory(option === "All" ? null : option);
    setIsOpen(false);
    console.log("selected option", option);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <TouchableWithoutFeedback onPress={closeDropdown}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.trigger} onPress={toggleDropdown}>
          <Text style={styles.triggerText}>{selectedCategory || "All"}</Text>
          <Ionicons
            name={isOpen ? "chevron-up" : "chevron-down"}
            size={22}
            style={styles.icon}
          />
        </TouchableOpacity>
        {isOpen && (
          <Animated.View
            style={[
              styles.dropdownMenu,
              {
                opacity: fadeAnim,
                width: Dimensions.get("window").width - 64,
                zIndex: 1,
              },
            ]}
          >
            {options.map((option: ICategory, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectOption(option)}
                style={styles.dropdownItem}
              >
                <Text
                  style={[
                    styles.dropdownItemText,
                    {
                      fontFamily:
                        selectedCategory === option
                          ? "Roboto-Condensed"
                          : "Roboto-Condensed-Light",
                      backgroundColor:
                        selectedCategory === option
                          ? "#a2cefe4c"
                          : "transparent",
                      padding: 12,
                    },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 1, // Ensure the dropdown is above other elements
  },
  trigger: {
    borderRadius: 4,
    backgroundColor: "#e6e6e6",
    padding: 12,
    marginHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  triggerText: {
    backgroundColor: "#e6e6e6",
    fontFamily: "Roboto-Condensed-Light",
    fontSize: 18,
  },
  icon: {
    backgroundColor: "#e6e6e6",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 32, // Adjust as needed
    width: Dimensions.get("window").width - 64,
    backgroundColor: "#fff",
    elevation: 4,
    zIndex: 2, // Ensure the dropdown is above other elements
  },
  dropdownItem: {
    // padding: 10,
  },
  dropdownItemText: {
    fontFamily: "Roboto-Condensed-Light",
    fontSize: 16,
  },
});

export default DropdownMenu;
