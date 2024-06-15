import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import exercises from "../../workout-data/data/exercises.json";
import { useState } from "react";

const ExerciseDetailsScreen = () => {
  const params = useLocalSearchParams();

  const [isInstructionsExpanded, setInstructionsExpanded] = useState(false);

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>Exercise Not Found</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />

      <View style={styles.panel}>
        <Text style={styles.itemName}>{exercise.name}</Text>
        <Text style={styles.itemMuscle}>
          {exercise.muscle.toUpperCase()} | {exercise.type.toUpperCase()}
        </Text>
        <Text>{exercise.equipment}</Text>
      </View>
      <View style={styles.panel}>
        <Text numberOfLines={isInstructionsExpanded ? 0 : 3}>{exercise.instructions}</Text>
        <Text onPress={() => setInstructionsExpanded(!isInstructionsExpanded)} style={styles.seeMore}>
          {isInstructionsExpanded ? "See Less" : "See More"}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ExerciseDetailsScreen;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 10,
    // backgroundColor: "white",
    // borderRadius: 10,
    // borderBlockColor: "black",

    // shadow

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  itemName: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 5,
  },

  itemInstructions: {
    paddingVertical: 3,
  },

  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5
  },

  seeMore: {
    alignSelf: "center",
    fontSize: 16,
    color: "#337ab7",
    fontWeight: "bold",
    padding: 10,
    cursor: "pointer"
  }
});
