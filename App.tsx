import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigation from './src/navigation/AppNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar
           backgroundColor="#1bb57d"
            barStyle="dark-content"
          />
          <Provider store={store}>
          <AppNavigation />
          </Provider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
