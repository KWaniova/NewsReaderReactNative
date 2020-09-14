/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import TabScreen from './src/screens/TabScreen';


const App: () => React.ReactNode = () => {
  console.disableYellowBox = true;
  return (
    <View style={styles.container}>
      <TabScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, alignItems: 'center'}
});

export default App;
