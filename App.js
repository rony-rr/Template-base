import * as React from "react";

import { LogBox } from "react-native";

import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";

import RootApp from "./src/navigation/RootApp";

const App = () => {
  /** Ignore Yellow Box Warning */
  LogBox.ignoreAllLogs();

  let [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    KaushanScript: require("./assets/fonts/KaushanScript.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <RootApp />;
};

export default App;
