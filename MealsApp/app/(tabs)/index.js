import { FlatList } from "react-native";
import { useRouter } from "expo-router";

import CategoryGridTile from "../../components/CategoryGridTile";
import { CATEGORIES } from "../../data/dummy-data";

function CategoriesScreen() {
  const router = useRouter();

  function renderCategoryItem({ item }) {
    return (
      <CategoryGridTile
        id={item.id}
        title={item.title}
        color={item.color}
        onPress={() => router.push(`/meals/${item.id}`)}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
