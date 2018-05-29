import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import LoginScreen from './src/Screens/LoginScreen'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  LoginScreen: { screen: LoginScreen }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
