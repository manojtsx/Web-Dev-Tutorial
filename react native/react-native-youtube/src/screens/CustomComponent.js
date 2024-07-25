//  import libraries to create components
import React from "react";
import { StyleSheet, Text } from 'react-native';

// create a component that return jsx/ simple functoin
const CustomComponent = () =>{
  return(
    <Text style={styles.textStyle}>This is my custom component😍</Text>
  )
}

// create a stylesheet to style the component
const styles =  StyleSheet.create({
  textStyle : {
    color : "red"
  }
});

// export the file so that we can use it elsewhere
export default CustomComponent;