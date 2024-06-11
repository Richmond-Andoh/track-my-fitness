import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../workout-data/data/exercises.json";

const ExerciseDetailsScreen = () => {
  const params = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>Exercise Not Found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>{exercise.name} </Text>
      <Text style={exercise.itemName}>{exercise.name}</Text>
        <Text style={exercise.itemMuscle}>
          {exercise.muscle.toUpperCase()} | {exercise.type.toUpperCase()}
        </Text>
    </View>
  );
};

export default ExerciseDetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
});
