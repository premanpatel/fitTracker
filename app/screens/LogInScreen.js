import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Linking,
  Alert,
  Pressable,
} from "react-native";
import React from "react";

export default function LogInScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.cancelBtn}>
        <Text> X </Text>
      </View>
      <View style={styles.logInContainer}>
        <Text style={styles.logInText}> Log In </Text>

        <TextInput
          style={styles.textInputEmail}
          keyboardType="email-address"
          placeholder="Email"
        ></TextInput>
        <TextInput
          style={styles.textInputPassword}
          secureTextEntry="true"
          placeholder="Password"
        ></TextInput>
        <Text
          style={styles.forgotPassLink}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Forgot Password?
        </Text>
        <Pressable style={styles.logInBtn} onPress={() => alert("btn press")}>
          <Text style={styles.btnText}> Log In </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    felx: 1,
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logInContainer: {
    width: "75%",
    height: "40%",
    alignItems: "center",
    justifyContent: "space-around",
    bottom: 50,
  },
  logInText: {
    fontSize: 40,
  },
  cancelBtn: {
    backgroundColor: "#d11a2a",
    width: 50,
    height: 50,
    top: 50,
    left: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  textInputEmail: {
    height: 50,
    width: "100%",
    backgroundColor: "#F2F2F2",
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInputPassword: {
    height: 50,
    width: "100%",
    backgroundColor: "#F2F2F2",
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  forgotPassLink: {
    color: "blue",
  },
  logInBtn: {
    backgroundColor: "#293462",
    width: "50%",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 20,
    color: "white",
  },
});
