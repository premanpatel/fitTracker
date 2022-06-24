import {
  Text,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { ButtonGroup } from "react-native-elements";

/* 
  Workout Screen
  - Add exercises to track weight used and reps
*/

export default function WorkoutScreen() {
  const [isMuscleGrouplVisible, setMuscleGroupVisible] = useState(false);

  const buttons = [
    "Abs",
    "Back",
    "Biceps",
    "Cardio",
    "Chest",
    "Legs",
    "Shoulders",
    "Triceps",
  ];

  const toggleMuscleGroupModal = () => {
    setMuscleGroupVisible(!isMuscleGrouplVisible);
  };

  return (
    <KeyboardAvoidingView style={{ height: "100%" }} behavior="padding">
      <SafeAreaView style={styles.background}>
        <ScrollView style={{ width: "100%", height: "100%" }}>
          <Pressable
            style={styles.finishBtn}
            onPress={() => alert("btn press")}
          >
            <Text style={styles.textStyle}> Finish </Text>
          </Pressable>
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
              keyboardType={"numeric"}
            ></TextInput>
          </View>

          <ExerciseModule />
          <SingleArmExerciseModule />
          <ExerciseModule />

          <Pressable style={styles.addBtn} onPress={toggleMuscleGroupModal}>
            <Text style={styles.addBtnText}> + </Text>
          </Pressable>

          <Modal
            style={styles.muscleGroupModal}
            isVisible={isMuscleGrouplVisible}
          >
            <View style={{ flex: 1 }}>
              <SafeAreaView style={{ felx: 1 }}>
                <View>
                  <ButtonGroup
                    buttons={buttons}
                    containerStyle={styles.muscleGroupBtnGroupContainer}
                    buttonContainerStyle={styles.muscleGroupBtnGroup}
                    textStyle={{ color: "#fff" }}
                  />
                </View>
              </SafeAreaView>

              <Button title="Hide modal" onPress={toggleMuscleGroupModal} />
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

function ExerciseModule() {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseText}> Exercise1 </Text>
      <View style={styles.setHeaderContainer}>
        <Text style={styles.textStyle}> Set </Text>
        <Text style={styles.textStyle}> Weight </Text>
        <Text style={styles.textStyle}> Reps </Text>
      </View>
      <WorkoutSetModule style={styles.workoutSetModuleSpacing} />
      <WorkoutSetModule style={styles.workoutSetModuleSpacing} />

      <Pressable style={styles.addSetBtn} onPress={() => alert("btn press")}>
        <Text style={styles.textStyle}> Add Set </Text>
      </Pressable>
    </View>
  );
}

function WorkoutSetModule() {
  return (
    <View style={styles.setContainer}>
      <Text style={styles.textStyle}> 1 </Text>
      <TextInput
        style={styles.weightTextInput}
        placeholder={"50"}
        keyboardType={"numeric"}
        placeholderTextColor="#A9A9A9"
      ></TextInput>
      <TextInput
        style={styles.repTextInput}
        placeholder={"12"}
        keyboardType={"number-pad"}
      ></TextInput>
    </View>
  );
}

function SingleArmExerciseModule() {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseText}> Exercise1 </Text>
      <View style={styles.setHeaderContainer}>
        <Text style={styles.textStyle}> Set </Text>
        <Text style={styles.textStyle}> Weight </Text>
        <Text style={styles.textStyle}> Left {"\n"} Reps </Text>
        <Text style={styles.textStyle}> Right {"\n"} Reps </Text>
      </View>
      <SingleArmWorkoutSetModule style={styles.workoutSetModuleSpacing} />
      <SingleArmWorkoutSetModule style={styles.workoutSetModuleSpacing} />

      <Pressable style={styles.addSetBtn} onPress={() => alert("btn press")}>
        <Text style={styles.textStyle}> Add Set </Text>
      </Pressable>
    </View>
  );
}

function SingleArmWorkoutSetModule() {
  return (
    <View style={styles.setContainer}>
      <Text style={styles.textStyle}> 1 </Text>
      <TextInput
        style={styles.weightTextInput}
        placeholder={"50"}
        keyboardType={"numeric"}
        placeholderTextColor="#A9A9A9"
      ></TextInput>
      <TextInput
        style={styles.repTextInput}
        placeholder={"12"}
        keyboardType={"number-pad"}
      ></TextInput>
      <TextInput
        style={styles.repTextInput}
        placeholder={"12"}
        keyboardType={"number-pad"}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  titleModule: {
    backgroundColor: "#d11a2a",
    width: "75%",
    alignSelf: "center",
    borderRadius: 20,
    top: 20,
  },
  titleTextInput: {
    height: 50,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    color: "white",
  },
  workoutTitleTextInput: {
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, .25)",
    height: 50,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    color: "white",
  },
  startTimeTextInput: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, .25)",
    height: 50,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    color: "white",
  },
  endTimeTextInput: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, .25)",
    height: 50,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    color: "white",
  },
  bodyWeightTextInput: {
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, .25)",
    height: 50,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    color: "white",
  },
  addBtn: {
    backgroundColor: "#d11a2a",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 50,
    alignSelf: "center",
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
    color: "white",
  },
  setContainer: {
    backgroundColor: "rgba(0, 0, 0, .20)",
    flexDirection: "row",
    justifyContent: "space-around",
    top: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  setHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    top: 5,
  },
  weightTextInput: {
    textAlign: "center",
    color: "white",
  },
  repTextInput: {
    textAlign: "center",
    color: "white",
  },
  addSetBtn: {
    backgroundColor: "#293462",
    width: "30%",
    padding: 10,
    alignSelf: "center",
    top: 15,
    margin: 5,
    borderRadius: 10,
  },
  finishBtn: {
    backgroundColor: "#293462",
    width: "20%",
    padding: 10,
    right: 10,
    alignSelf: "flex-end",
    borderRadius: 10,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  muscleGroupModal: {
    backgroundColor: "white",
  },
  muscleGroupBtnGroupContainer: {
    height: 500,
    backgroundColor: "#d11a2a",
    flexDirection: "vertical",
    borderRadius: 10,
  },
  muscleGroupBtnGroup: {
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, .25)",
  },
});
