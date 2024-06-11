import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../workout-data/data/exercises.json";

const ExerciseDetailsScreen = () => {
  const params = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>No Exercise Found</Text>;
  }

  return (
    <View>
      <Text>Exercise Details: {params.name} </Text>
    </View>
  );
};

export default ExerciseDetailsScreen;

const styles = StyleSheet.create({});
