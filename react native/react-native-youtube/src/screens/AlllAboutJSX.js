// IMP: JSX is not a special way to embed HTML in JavaScript. All JSX does is replace a file's <tags> with equivalent calls to React.createElement(), we can see it live on Babel. https://babeljs.io/
// 1: We can refer to JS variables inside a JSX block by using curly braces.
// 2: Always return JSX using () or grouping tags. Never give the return value undefined.
// 3: We can assign JSX elements to a variable, then we can show that variable inside a JSX block.
// 4: We can assemble different JSX elements like normal HTML. (using view)
// 5: Any JavaScript expression will work between curly braces, including function calls like
// get FullName("vinod", "Bahadur", "Thapa")
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import {
  useFonts,
  Lexend_100Thin,
  Lexend_200ExtraLight,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
  Lexend_800ExtraBold,
  Lexend_900Black,
} from "@expo-google-fonts/lexend";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const AlllAboutJSX = () => {
  let [fontsLoaded] = useFonts({
    Lexend_100Thin,
    Lexend_200ExtraLight,
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Lexend_800ExtraBold,
    Lexend_900Black,
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  const variable = "hello";
  const myElem = <Text>Hello this is my element</Text>;
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View>
        <Text style={{ fontFamily: "Lexend_600SemiBold" }}>AlllAboutJSX</Text>
        <Text>{variable}</Text>
        {myElem}
      </View>
    );
  }
};

export default AlllAboutJSX;
