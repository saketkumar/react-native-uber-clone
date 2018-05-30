import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends Component {

    static navigationOptions = {
        header:  null
    }

    render() {
        return(
            <View style={{flex: 1}} >
                <ImageBackground
                    source={require('./images/login_bg.jpg')} 
                    style={{flex: 1}}  
                >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ backgroundColor: 'white', height: 100, width: 100, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontSize: 25, fontWeight: 'bold'}} > UBER </Text>
                    </View>
                </View>
                </ImageBackground>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });