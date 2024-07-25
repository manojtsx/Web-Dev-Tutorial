// import libraries to create components
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CarDetails from "./src/components/CarDetails";
import AlllAboutJSX from "./src/screens/AlllAboutJSX";

// create a component that returns JSX/simple function
const App = () => {
  return (
    // View is like a non-scrollable div
    <View style={styles.container}>
      <AlllAboutJSX />
        {/* <CarDetails imgSrc={require("./assets/splash.png")} /> */}
        {/* <CarDetails imgSrc={require("./assets/favicon.png")} /> */}
    </View>
  );
};

// create a stylesheet to style the component
const styles = StyleSheet.create({
  container: {
    height: 900,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  textStyle: {
    color: "red",
  },
});

// export the file so that we can use it elsewhere
export default App;
