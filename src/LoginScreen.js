import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

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