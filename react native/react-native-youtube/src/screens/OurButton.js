import React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const OurButton = () => {
  return (
    <View>
      <Text style={styles.text}>OurButton</Text>
      <Button
        title="Hello"
        style={styles.button}
        onPress={() => Alert.alert("Clicked")}
        disabled
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Clicked")}
      >
        <Text>Hi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 20,
  },
  button: {
    backgroundColor: "red",
  },
});

export default OurButton;
