import React from "react";
import { Image, View } from "react-native";

const CarDetails = (props) => {
  return (
    <View>
      <Image source={props.imgSrc} />
    </View>
  );
};

export default CarDetails;
