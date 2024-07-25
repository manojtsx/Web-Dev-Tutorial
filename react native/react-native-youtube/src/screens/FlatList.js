import { StyleSheet, Text, View, FlatList } from "react-native";

const FlastListCreate = () => {
  const names = [
    {
      name: "Manoj",
    },
    {
      name: "Remon",
    },
    {
      name: "hello",
    },
    {
      name: "mother",
    },
    {
      name: "mother",
    },
    {
      name: "mother",
    },
    {
      name: "mother",
    },
    {
      name: "mother",
    },
    {
      name: "mother",
    },
    {
      name: "mother",
    },
    {
      name: "mother",
    },
    {
      name: "mother",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.header}>FlastList</Text>
      <FlatList
        keyExtractor={(key,index) => {
          return index.toString();
        }}
        horizontal
        inverted
        // numColumns={5}
        data={names}
        renderItem={(element) => {
          return <Text style={styles.item}>{element.item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width : '100%',
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  }, 
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    fontSize: 18,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop : 40
  },
});
export default FlastListCreate;
