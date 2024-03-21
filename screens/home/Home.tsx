import { View, Text, FlatList, Platform, TouchableOpacity } from "react-native";
import { style } from "./styles/Home.style";
import AddTodoBtn from "../../components/add-todo-button/AddTodoBtn";
import DropdownMenu from "../../components/dropdown-menu/DropdownMenu";
import { useState } from "react";
import { DisplayCard } from "../../components/display-card/DisplayCard";

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
    {
      title: "note3",
      category: "Work",
      text: "note 3 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note4",
      category: "Fitness",
      text: "note 4 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note5",
      category: "Work",
      text: "note 5 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note6",
      category: "Fitness",
      text: "note 6 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note7",
      category: "Work",
      text: "note 7 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note8",
      category: "Fitness",
      text: "note 8 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note9",
      category: "Work",
      text: "note 9 body of text making this take a bit of a spaceeeeeeeeeeeeeeeeeee",
      createdAt: new Date(),
    },
    {
      title: "note10",
      category: "Fitness",
      text: "note 10 body of text making this take a bit of a space",
      createdAt: new Date(),
    },

    {
      title: "note6",
      category: "Fitness",
      text: "note 6 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note7",
      category: "Work",
      text: "note 7 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note8",
      category: "Fitness",
      text: "note 8 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note9",
      category: "Work",
      text: "note 9 body of text making this take a bit of a spaceeeeeeeeeeeeeeeeeee",
      createdAt: new Date(),
    },
    {
      title: "note10",
      category: "Fitness",
      text: "note 10 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note6",
      category: "Fitness",
      text: "note 6 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note7",
      category: "Work",
      text: "note 7 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note8",
      category: "Fitness",
      text: "note 8 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note9",
      category: "Work",
      text: "note 9 body of text making this take a bit of a spaceeeeeeeeeeeeeeeeeee",
      createdAt: new Date(),
    },
    {
      title: "note10",
      category: "Fitness",
      text: "note 10 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note6",
      category: "Fitness",
      text: "note 6 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note7",
      category: "Work",
      text: "note 7 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note8",
      category: "Fitness",
      text: "note 8 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
    {
      title: "note9",
      category: "Work",
      text: "note 9 body of text making this take a bit of a spaceeeeeeeeeeeeeeeeeee",
      createdAt: new Date(),
    },
    {
      title: "note10",
      category: "Fitness",
      text: "note 10 body of text making this take a bit of a space",
      createdAt: new Date(),
    },
  ]);
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>Home</Text> */}
      <AddTodoBtn />
      <DropdownMenu
        options={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <View style={style.listContainer}>
        <FlatList
          style={style.flatList}
          ItemSeparatorComponent={() => <View style={style.separator} />}
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} style={{ maxWidth: "50%" }}>
              <DisplayCard {...item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default Home;
