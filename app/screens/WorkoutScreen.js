import {
  Text,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";

export default function WorkoutScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.titleModule}>
        <TextInput
          style={styles.workoutTitleTextInput}
          placeholder={"Workout Title"}
        ></TextInput>
        <TextInput
          style={styles.startTimeTextInput}
          placeholder={"Start Time"}
        ></TextInput>
        <TextInput
          style={styles.endTimeTextInput}
          placeholder={"End Time"}
        ></TextInput>
        <TextInput
          style={styles.bodyWeightTextInput}
          placeholder={"Body Weight"}
        ></TextInput>
      </View>

      <ExerciseModule />

      <Pressable style={styles.addBtn} onPress={() => alert("btn press")}>
        <Text style={styles.addBtnText}> + </Text>
      </Pressable>
    </SafeAreaView>
  );
}

function ExerciseModule() {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseText}> Exercise1 </Text>
      <View>
        <Text> 1 </Text>
        <TextInput placeholder={"50"}> </TextInput>
        <TextInput placeholder={"12"}> </TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  titleModule: {
    backgroundColor: "#d11a2a",
    width: "75%",
    alignSelf: "center",
    borderRadius: 20,
    top: 50,
    margin: 15,
  },
  titleTextInput: {
    height: 50,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  workoutTitleTextInput: {
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, .25)",
    height: 50,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  startTimeTextInput: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, .25)",
    height: 50,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  endTimeTextInput: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, .25)",
    height: 50,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  bodyWeightTextInput: {
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, .25)",
    height: 50,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  addBtn: {
    backgroundColor: "#d11a2a",
    top: 75,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  addBtnText: {
    fontSize: 40,
    color: "white",
  },
  exerciseContainer: {
    backgroundColor: "#d11a2a",
    width: "75%",
    alignSelf: "center",
    borderRadius: 20,
    top: 50,
    margin: 15,
    padding: 20,
  },
  exerciseText: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
});
