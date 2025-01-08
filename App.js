import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const isInputValid = phoneNumber.length >= 10;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inner}>
          <Text style={styles.navbar}>Đăng nhập</Text>
          <Text style={styles.header}>Nhập số điện thoại</Text>
          <Text style={styles.content}>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại
            OneHousing Pro
          </Text>
          <TextInput
            style={styles.input}
            inputMode="numeric"
            placeholder="Nhập số điện thoại của bạn"
            placeholderTextColor="#c7c7c7"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TouchableOpacity
            style={[
              styles.button,
              isInputValid ? styles.buttonEnabled : styles.buttonDisabled,
            ]}
            disabled={!isInputValid}
          >
            <Text
              style={[
                styles.buttonText,
                isInputValid
                  ? styles.buttonTextEnabled
                  : styles.buttonTextDisabled,
              ]}
            >
              Tiếp tục
            </Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    flex: 1,
    justifyContent: "start",
    paddingTop: 35,
  },
  navbar: {
    padding: 25,
    fontSize: 30,
    fontWeight: 600,
    borderStyle: "solid",
    borderColor: "#e6e6e6",
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 25,
    padding: 25,
  },
  content: {
    fontSize: 15,
    padding: 25,
  },
  input: {
    margin: 25,
    padding: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "#c7c7c7",
  },
  button: {
    padding: 15,
    margin: 25,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonEnabled: {
    backgroundColor: "blue",
  },
  buttonDisabled: {
    backgroundColor: "#f2f2f2",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTextEnabled: {
    color: "#fff",
  },
  buttonTextDisabled: {
    color: "#d4d4d4",
  },
});
