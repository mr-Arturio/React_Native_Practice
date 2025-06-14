import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";

import MealItem from "../../components/MealItem";
import { MEALS, CATEGORIES } from "../../data/dummy-data";

function MealsOverviewScreen() {
  const { categoryId } = useLocalSearchParams();
  const navigation = useNavigation();
  const router = useRouter();

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId);
    if (category) {
      navigation.setOptions({
        title: category.title,
      });
    }
  }, [categoryId]);

  function renderMealItem({ item }) {
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
        onPress={() => router.push(`/mealDetails/${item.id}`)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
