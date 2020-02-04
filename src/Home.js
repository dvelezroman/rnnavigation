import React from "react";
import { View, Text, Button, StyleSheet, AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { goToLogin } from "../navigation";

export default Home = props => {
  const { username } = props;

  const logout = async () => {
    await AsyncStorage.removeItem("username");
    goToLogin();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi {username}!</Text>
      <Button onPress={logout} title="Logout" color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
