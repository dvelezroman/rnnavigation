import { Navigation } from "react-native-navigation";
import LoadingScreen from "./src/LoadingScreen";

Navigation.registerComponent("LoadingScreen", () => LoadingScreen);

Navigation.events().registerAppLaunchedListener(() => {
  // set the root component
  Navigation.setRoot({
    root: {
      component: {
        name: "LoadingScreen"
      }
    }
  });
});
