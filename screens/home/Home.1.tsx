import { View, FlatList } from "react-native";
import AddTodoBtn from "../../components/add-todo-button/AddTodoBtn";
import DropdownMenu from "../../components/dropdown-menu/DropdownMenu";
import { useState } from "react";

export function Home() {
  const categories: ICategory[] = [
    "All",
    "Budget",
    "Fitness",
    "Personal",
    "School",
    "Work",
  ];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [notes, setNotes] = useState<INote[]>([
    {
      title: "note1",
      category: "Work",
      text: "note one body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note2",
      category: "Fitness",
      text: "note 2 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
  ]);
  return (
    <View>
      {/* <Text>Home</Text> */}
      <AddTodoBtn />
      <DropdownMenu
        options={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <FlatList />
    </View>
  );
}
