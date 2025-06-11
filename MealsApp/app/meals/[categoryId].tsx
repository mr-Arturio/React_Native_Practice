import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { MEALS } from '../../data/dummy-data';
import MealItem from '../../components/MealItem'

type Meal = {
  id: string;
  title: string;
  categoryIds: string[];
};

function MealsOverviewScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  function renderMealItem({ item }: { item: Meal }) {
    return <MealItem meal={item} />;
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
  mealItem: {
    marginVertical: 12,
    padding: 16,
    backgroundColor: '#e2e2e2',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
