import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyProvider } from "./src/context";
import { MyContext } from "./src/context";
class App extends Component {
  static contextType = MyContext;
  render() {
    return (
      <MyProvider>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </MyProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
