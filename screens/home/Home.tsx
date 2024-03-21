import { View, Text, FlatList, Platform, TouchableOpacity } from "react-native";
import { style } from "./styles/Home.style";
import AddTodoBtn from "../../components/add-todo-button/AddTodoBtn";
import DropdownMenu from "../../components/dropdown-menu/DropdownMenu";
import { useState } from "react";
import { DisplayCard } from "../../components/display-card/DisplayCard";
import { testNotes } from "../../data.test";
import EmptyList from "../../components/empty-list/EmptyList";

function Home() {
  const categories: ICategory[] = [
    "All",
    "Budget",
    "Fitness",
    "Personal",
    "School",
    "Work",
  ];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [notes, setNotes] = useState<INote[]>([]);
  return (
    <View style={{ flex: 1 }}>
      <AddTodoBtn />
      <DropdownMenu
        options={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      {notes?.length > 0 ? (
        <View style={style.listContainer}>
          <FlatList
            style={style.flatList}
            data={notes}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={({ item, index }) => <DisplayCard {...item} />}
          />
        </View>
      ) : (
        <EmptyList />
      )}
    </View>
  );
}

export default Home;
