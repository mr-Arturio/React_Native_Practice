import { StyleSheet, Text, View } from "react-native";

const MealItem = ({ meal }) => {
  return (
    <View style={styles.mealItem}>
      <Text style={styles.title}>{meal.title}</Text>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    marginVertical: 12,
    padding: 16,
    backgroundColor: "#e2e2e2",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});
