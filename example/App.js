/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import Pax from 'react-native-pax-test-moez';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Button title="Click ME" onPress={() => Pax.printStr('Hello World', 0)} />
    </View>
  );
};

export default App;
