import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.titleAndAddBtnAlignment}>
        <Text style={styles.titleText}> Workout Logs </Text>
        <Pressable style={styles.addBtn} onPress={() => alert("btn press")}>
          <Text style={styles.addBtnText}> + </Text>
        </Pressable>
      </View>

      <WorkoutModule />
      <WorkoutModule />
      <WorkoutModule />
    </SafeAreaView>
  );
}

function WorkoutModule() {
  return (
    <Pressable style={styles.workoutModule} onPress={() => alert("btn press")}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextStyle}> Muscle Group</Text>
        <Text style={styles.headerTextStyle}> Date </Text>
      </View>
      <View style={styles.exerciseContainer}>
        <Text style={styles.textStyle}> Exercise1 </Text>
        <Text style={styles.textStyle}> 3 Sets </Text>
      </View>
      <View style={styles.exerciseContainer}>
        <Text style={styles.textStyle}> Exercise1 </Text>
        <Text style={styles.textStyle}> 3 Sets </Text>
      </View>
      <View style={styles.exerciseContainer}>
        <Text style={styles.textStyle}> Exercise1 </Text>
        <Text style={styles.textStyle}> 3 Sets </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    left: 10,
  },
  addBtn: {
    backgroundColor: "#d11a2a",
    width: 50,
    height: 50,
    right: 30,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    borderRadius: 50,
  },
  addBtnText: {
    fontSize: 40,
    color: "white",
  },
  workoutModule: {
    backgroundColor: "#d11a2a",
    width: "75%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 20,
    top: 50,
    margin: 15,
  },
  headerTextStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 18,
    color: "white",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  exerciseContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
