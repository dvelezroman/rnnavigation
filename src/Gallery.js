import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";

const { width } = Dimensions.get("window");
const base_width = width / 2;

const items = [
  {
    id: 1,
    name: "Dario"
  },
  {
    id: 2,
    name: "Jose"
  },
  {
    id: 3,
    name: "Ivana"
  },
  {
    id: 4,
    name: "Ale"
  },
  {
    id: 5,
    name: "Goyo"
  }
];

export default Gallery = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => item.id.toString()}
        numColumns={2}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
};

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{item.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "black",
    width: base_width,
    padding: 3,
    height: 250
  },
  text: {
    fontSize: 14,
    color: "white"
  }
});
