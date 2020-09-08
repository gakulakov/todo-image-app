import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { bootstrap } from "./src/bootStrap";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { YellowBox } from "react-native";
import store from "./src/store";

YellowBox.ignoreWarnings(["Remote debugger"]);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
