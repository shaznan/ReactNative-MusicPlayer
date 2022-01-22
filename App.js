import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigation";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
