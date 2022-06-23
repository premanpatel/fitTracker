import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import LogInScreen from "./LogInScreen";

export default function WelcomeScreen() {
  return (
    <View style={styles.background}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <Pressable style={styles.registerBtn} onPress={() => alert("reg press")}>
        <Text style={styles.btnText}> Register </Text>
      </Pressable>

      <Pressable style={styles.logInBtn} onPress={() => alert("log press")}>
        <Text style={styles.btnText}> Log In </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  registerBtn: {
    backgroundColor: "#d90022",
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  logInBtn: {
    backgroundColor: "#293462",
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 150,
  },
  btnText: {
    fontSize: 20,
    color: "white",
  },
});
