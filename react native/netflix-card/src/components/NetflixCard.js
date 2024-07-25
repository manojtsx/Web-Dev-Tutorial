import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const NetflixCard = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Netflix M.O</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://images.pexels.com/photos/595747/pexels-photo-595747.jpeg",
            }}
          />
        </View>
        <View style={styles.infoStyle}>
          <Text style={styles.infoTitleStyle}>All of Us Dead</Text>
          <Text style={styles.infoDescriptionStyle}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,{" "}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            Linking.openURL(
              "https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fbrowse"
            );
          }}
        >
          <Text style={styles.buttonTextStyle}>Watch Now</Text>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://images.pexels.com/photos/595747/pexels-photo-595747.jpeg",
            }}
          />
        </View>
        <View style={styles.infoStyle}>
          <Text style={styles.infoTitleStyle}>All of Us Dead</Text>
          <Text style={styles.infoDescriptionStyle}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,{" "}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            Linking.openURL(
              "https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fbrowse"
            );
          }}
        >
          <Text style={styles.buttonTextStyle}>Watch Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#141414",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#e50914",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  imgStyle: {
    width: 150,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
  },
  infoStyle: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
  },
  infoTitleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  infoDescriptionStyle: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
  },
  buttonStyle: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#e50914",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NetflixCard;
