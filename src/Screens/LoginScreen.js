import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends Component {

    render() {
        return(
            <View style={styles.container} >
                <Text> LoginScreen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });