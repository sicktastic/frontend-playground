import React from 'react';
import ReactNative from 'react-native';

const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);
