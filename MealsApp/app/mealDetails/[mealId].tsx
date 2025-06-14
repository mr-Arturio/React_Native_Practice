import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

import List from "../../components/MealDetail/List";
import Subtitle from "../../components/MealDetail/Subtitle";
import MealDetails from "../../components/MealDetails";
import { MEALS } from "../../data/dummy-data";

export default function MealDetailScreen() {
  const { mealId } = useLocalSearchParams();
  const selectedMeal = MEALS.find((m) => m.id === mealId);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (selectedMeal) {
      navigation.setOptions({ title: selectedMeal.title });
    }
  }, [selectedMeal]);

  if (!selectedMeal) {
    return <Text>Meal not found</Text>;
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
