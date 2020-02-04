import { Navigation } from "react-native-navigation";

import Login from "../src/Login";
import ForgotPassword from "../src/ForgotPassword";
import Home from "../src/Home";
import Feed from "../src/Feed";
import Gallery from "../src/Gallery";

Navigation.registerComponent("LoginScreen", () => Login);
Navigation.registerComponent("ForgotPasswordScreen", () => ForgotPassword);
Navigation.registerComponent("HomeScreen", () => Home);
Navigation.registerComponent("FeedScreen", () => Feed);
Navigation.registerComponent("GalleryScreen", () => Gallery);

export const goToLogin = () =>
  Navigation.setRoot({
    root: {
      stack: {
        // creates a stack navigation
        id: "stackMain",
        children: [
          {
            component: {
              name: "LoginScreen"
            }
          }
        ]
      }
    }
  });

export const goToTabs = username => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        // create a bottom tabs navigation
        id: "bottomTabsMain",
        children: [
          {
            component: {
              name: "HomeScreen",
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: "Home"
                }
              },
              passProps: {
                username
              }
            }
          },
          {
            component: {
              name: "GalleryScreen",
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: "Gallery"
                }
              }
            }
          },
          {
            component: {
              name: "FeedScreen",
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: "Feed"
                }
              }
            }
          }
        ]
      }
    }
  });
};
