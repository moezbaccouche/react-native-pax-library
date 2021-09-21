/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { Node } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import Pax from "react-native-pax-library";

const App = () => {
  const onPrint = () => {
    Pax.printStr("Hello World !", Pax.PARTIAL_CUT);
  };

  const onOpenDrawer = async () => {
    try {
      const result = await Pax.openDrawer();
      console.log("Opened", result);
    } catch (error) {
      console.log("Unable to open Cash Drawer.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Print" onPress={onPrint} />

      <Button title="Open Cash Drawer" color="#2699FB" onPress={onOpenDrawer} />
    </View>
  );
};

export default App;
