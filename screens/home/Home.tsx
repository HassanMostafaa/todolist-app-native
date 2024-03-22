import { View, FlatList, Text } from "react-native";
import { style } from "./styles/Home.style";
import AddTodoBtn from "../../components/add-todo-button/AddTodoBtn";
import DropdownMenu from "../../components/dropdown-menu/DropdownMenu";
import { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [notes, setNotes] = useState<INote[]>([]);
  const [showNewNoteModal, setShowNewNoteModal] = useState<boolean>(false);
  return (
    <View style={{ flex: 1 }}>
      <AddTodoBtn setShowNewNoteModal={setShowNewNoteModal} />
      <DropdownMenu
        options={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      {notes && notes?.length && notes?.length > 0 ? (
        <View style={style.listContainer}>
          <FlatList
            style={style.flatList}
            data={notes}
            keyExtractor={(index) => JSON.stringify(index)}
            numColumns={2}
            renderItem={({ item }) => <DisplayCard {...item} />}
          />
        </View>
      ) : (
        <EmptyList />
      )}
      <NewNoteModal
        visible={showNewNoteModal}
        setShowNewNoteModal={setShowNewNoteModal}
      />
    </View>
  );
}

export default Home;
