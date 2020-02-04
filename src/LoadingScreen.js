import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
// import { goToTabs, goToLogin } from "../navigation";

const LoadingScreen = () => {
  const getFromLocalStorage = async key => {
    const username = await AsyncStorage.getItem(key);
    return username;
  };

  useEffect(() => {
    const getUsername = async () => {
      const username = await getFromLocalStorage("username");
      if (username) {
        goToTabs(global.icons, username);
      } else {
        goToLogin();
      }
    };
    getUsername();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
