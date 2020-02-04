import React from "react";
import { Navigation } from "react-native-navigation";
import {
  AsyncStorage,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { goToTabs } from "../navigation";

const Login = props => {
  const [username, setUsername] = useState("");

  const login = async () => {
    if (username !== "") {
      await AsyncStorage.setItem("username", username);
      goToTabs(global.icons, username);
    }
  };

  const goToForgotPassword = () => {
    Navigation.push(props.componentId, {
      component: {
        name: "ForgotPasswordScreen"
      }
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Enter your username</Text>
            <TextInput
              onChangeText={username => {
                setUsername(username);
              }}
              style={styles.textInput}
            />
          </View>

          <Button title="Login" color="#0064e1" onPress={login} />

          <TouchableOpacity onPress={goToForgotPassword}>
            <View style={styles.center}>
              <Text style={styles.link_text}>Forgot Password</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  // next: add login code
};

Login.navigationOptions = {
  topBar: {
    visible: false
  }
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  fieldContainer: {
    marginTop: 20
  },
  label: {
    fontSize: 16
  },
  textInput: {
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#eaeaea",
    padding: 5
  }
});
