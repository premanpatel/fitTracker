import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.cancelBtn}>
        <Text> X </Text>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.logInText}> Sign Up </Text>

        <TextInput
          style={styles.textInputUsername}
          placeholder="Username"
        ></TextInput>
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
        <TextInput
          style={styles.textInputConfirmPassword}
          secureTextEntry="true"
          placeholder="Confirm Password"
        ></TextInput>
        <Pressable style={styles.logInBtn} onPress={() => alert("btn press")}>
          <Text style={styles.btnText}> Sign Up </Text>
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
  signUpContainer: {
    width: "75%",
    height: "60%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logInText: {
    fontSize: 40,
  },
  cancelBtn: {
    backgroundColor: "#d90022",
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
  textInputUsername: {
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
  textInputConfirmPassword: {
    height: 50,
    width: "100%",
    backgroundColor: "#F2F2F2",
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  logInBtn: {
    backgroundColor: "#d90022",
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
