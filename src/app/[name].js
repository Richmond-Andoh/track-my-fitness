import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router';

const ExerciseDetailsScreen = () => {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>Exercise Details: { params.name } </Text>
    </View>
  )
}

export default ExerciseDetailsScreen;

const styles = StyleSheet.create({})