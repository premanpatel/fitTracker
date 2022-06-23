import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LogInScreen from "./app/screens/LogInScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import HomeScreen from "./app/screens/HomeScreen";
import WorkoutScreen from "./app/screens/WorkoutScreen";

export default function App() {
  return <WorkoutScreen />;
}

const styles = StyleSheet.create({});
