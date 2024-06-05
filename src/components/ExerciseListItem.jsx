import { StyleSheet, Text, View } from "react-native";

const ExerciseListItem = ({ item }) => {
  return (
    <View style={styles.listContainer}>
      <View>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemMuscle}>
          {item.muscle.toUpperCase()} | {item.type.toUpperCase()}
        </Text>
        {/* <Text style={styles.itemInstructions}>{item.instructions}</Text> */}
      </View>
    </View>
  );
};

export default ExerciseListItem;

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderBlockColor: "black",

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
