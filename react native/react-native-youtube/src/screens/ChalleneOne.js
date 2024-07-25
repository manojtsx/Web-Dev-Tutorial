import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChalleneOne = () => {
  const yourname = "Manoj Shrestha";
  return (
    <View>
      <Text style={styles.textOne}>Welcome to Me</Text>
      <Text style={styles.textTwo}>Loving react native</Text>
      <Text style={styles.textThree}>Hi, my name is {yourname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textOne: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 40,
  },
  textTwo: {
    fontSize: 30,
  },
  textThree: {
    fontWeight: "400",
    fontSize: 50,
  },
});

export default ChalleneOne;
