import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
