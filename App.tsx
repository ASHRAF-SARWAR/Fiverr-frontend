import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "@pages/LoginPage";
import { StyleSheet, View } from "react-native";
import Join from "@pages/Join";
import SignUp from "@pages/SignUp";
import HomePage from "@pages/HomePage";
import ForgotPassword from "@pages/ForgotPassword";
import { ThemeProvider } from "./configTheme/ThemeContext";
import { useTheme } from "configTheme/ThemeContext";
import Applications from "@pages/Applications";

const Stack = createNativeStackNavigator();

const App = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomePage}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitleVisible: false,
              headerTintColor: theme.theme === "dark" ? "white" : "black",

              // headerBackground: () => (
              //   <View style={{ flex: 1, backgroundColor: "lightgray" }} />
              // ),
            }}
          />
          <Stack.Screen
            name="Join"
            component={Join}
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitleVisible: false,
              headerTintColor: !theme.dark ? "#ffffff" : "black", // This line sets the back arrow color to white
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitleVisible: false,
              headerTintColor: !theme.dark ? "#ffffff" : "black", // This line sets the back arrow color to white
            }}
          />
          <Stack.Screen
            name="Forgot Passowrd"
            component={ForgotPassword}
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitleVisible: false,
              headerTintColor: !theme.dark ? "#ffffff" : "black", // This line sets the back arrow color to white
            }}
          />
          <Stack.Screen
            name="Applications"
            component={Applications}
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
