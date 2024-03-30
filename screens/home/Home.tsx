import { View, FlatList, Text, Pressable } from "react-native";
import { style } from "./styles/Home.style";
import AddTodoBtn from "../../components/add-todo-button/AddTodoBtn";
import DropdownMenu from "../../components/dropdown-menu/DropdownMenu";
import { useEffect, useState } from "react";
import { DisplayCard } from "../../components/display-card/DisplayCard";
// import { testNotes } from "../../data.test";
import EmptyList from "../../components/empty-list/EmptyList";
import { testNotes } from "../../data.test";
import NewNoteModal from "../../components/new-note-modal/NewNoteModal";

export const categories: ICategory[] = [
  "All",
  "Budget",
  "Fitness",
  "Personal",
  "School",
  "Work",
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );
  const [notes, setNotes] = useState<INote[]>([]);
  const [showNewNoteModal, setShowNewNoteModal] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedCategory || selectedCategory === "All") {
      setNotes(notes);
    } else {
      const filteredNotesByCategory = notes.filter(
        (x) => x.category === selectedCategory
      );
      setNotes(filteredNotesByCategory);
    }
  }, [selectedCategory]);
  return (
    <View style={{ flex: 1 }}>
      <AddTodoBtn setShowNewNoteModal={setShowNewNoteModal} />
      <DropdownMenu
        options={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Text>{selectedCategory}</Text>
      {notes && notes?.length && notes?.length > 0 ? (
        <View style={style.listContainer}>
          <FlatList
            style={style.flatList}
            data={notes}
            keyExtractor={(index) => JSON.stringify(index)}
            numColumns={2}
            columnWrapperStyle={{ gap: 20, paddingBottom: 20 }}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <Pressable style={{ flex: 1 }} onPress={() => console.log(item)}>
                <DisplayCard {...item} />
              </Pressable>
            )}
          />
        </View>
      ) : (
        <EmptyList />
      )}
      <NewNoteModal
        visible={showNewNoteModal}
        setShowNewNoteModal={setShowNewNoteModal}
        setNotes={setNotes}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </View>
  );
}

export default Home;
