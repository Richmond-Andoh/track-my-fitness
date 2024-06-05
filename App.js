import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from "./workout-data/data/exercises.json"
import ExerciseListItem from './src/components/ExerciseListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
         data={exercises}
         contentContainerStyle={{ gap: 10}}
         keyExtractor={(item) => item.name}
         renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    marginTop: 10,
    gap: 
    10
  },
});
