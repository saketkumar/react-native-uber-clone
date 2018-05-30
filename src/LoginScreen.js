import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, TextInput, Text, Image, TouchableOpacity } from 'react-native';

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
                    <View style={{ 
                        backgroundColor: 'white', 
                        height: 100, width: 100, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        elevation : 15
                        }} >
                        <Text style={{ 
                            fontSize: 25, 
                            fontWeight: 'bold',
                            color: 'black'
                            }} > 
                            UBER 
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={{ height: 150, backgroundColor: 'white' }}>
                        <View style={{  alignItems: 'flex-start', marginTop: 25, paddingHorizontal: 25, opacity: 1 }}>
                            <Text style={{ fontSize: 25, opacity: 1 }} >
                                Get moving with Uber
                            </Text>
                        </View>
                    <TouchableOpacity>
                        <View style={{ marginTop: 25, paddingHorizontal: 25, flexDirection: 'row' }} >
                            <Image 
                                source={require('./images/india.png')} 
                                style={{
                                height: 24,
                                width: 24,
                                resizeMode: 'contain'
                                }} />
                            <View style= {{   flexDirection: 'row', flex: 1 }}>
                             <Text style= {{ fontSize: 20, paddingHorizontal: 10 }}> 
                                 +91
                             </Text>
                            <TextInput style={{ flex: 1, fontSize: 20 }} placeholder="Enter your mobile number" />
                        </View>
                        </View>
                    </TouchableOpacity>
                    </View>
                
                <View style={{
                    backgroundColor: 'white',
                    height: 70,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    borderTopWidth: 1,
                    paddingHorizontal: 25,
                    borderTopColor: '#e8e8ec'}}>

                        <Text style={{ 
                            color: '#5a7fdf',
                            }}>
                            or connect with social
                        </Text>
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