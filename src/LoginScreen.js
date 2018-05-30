import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, TextInput, Text, Image, TouchableOpacity, Animated, Dimensions } from 'react-native';

import { StackNavigator } from 'react-navigation';

import * as Animatable from 'react-native-animatable';
import { Icon } from 'native-base';

const SCREEN_HEIGHT = Dimensions.get('window').height

export default class LoginScreen extends Component {

    static navigationOptions = {
        header:  null
    }

    componentWillMount () {
        this.loginHeight = new Animated.Value(150)
    }

    increaseHeight = () =>{
        Animated.timing(this.loginHeight, {
            toValue: SCREEN_HEIGHT ,
            duration: 500
        }).start()
    }

    decreaseHeight = () =>{
        Animated.timing(this.loginHeight, {
            toValue: 150 ,
            duration: 500
        }).start()
    }

    render() {

        const headerTextOpacity = this.loginHeight.interpolate({
            inputRange: [150 , SCREEN_HEIGHT],
            outputRange: [1, 0]
        })

        const marginTop = this.loginHeight.interpolate({
            inputRange: [150 , SCREEN_HEIGHT],
            outputRange: [25, 100]
        })

        const headerBackArrowOpacity = this.loginHeight.interpolate({
            inputRange: [150 , SCREEN_HEIGHT],
            outputRange: [0, 1]
        })


        return(
            <View style={{flex: 1}} >
            <Animated.View style={{ 
                position: 'absolute',
                height:60,
                width:60,
                top:60,
                left:25,
                zIndex:100,
                opacity: headerBackArrowOpacity
            }}>
                <TouchableOpacity
                    onPress= {() => this.decreaseHeight()} >
                        <Icon name="md-arrow-back" style={{color: 'black'}} />
                </TouchableOpacity>
            </Animated.View>
                <ImageBackground
                    source={require('./images/login_bg.jpg')} 
                    style={{flex: 1}}  
                >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Animatable.View 
                        animation="zoomIn"
                        iterationCount={1}
                        style={{ 
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
                    </Animatable.View>
                </View>
                <Animatable.View animation="slideInUp" iterationCount={1} >
                    <Animated.View style={{ height: this.loginHeight, backgroundColor: 'white' }}>
                        <Animated.View style={{  alignItems: 'flex-start', marginTop: marginTop , paddingHorizontal: 25, opacity: headerTextOpacity }}>
                            <Text style={{ fontSize: 25, opacity: 1 }} >
                                Get moving with Uber
                            </Text>
                        </Animated.View>
                    <TouchableOpacity onPress= {() => this.increaseHeight() } >
                        <View style={{ marginTop: 25, paddingHorizontal: 25, flexDirection: 'row' }} >
                            <Image 
                                source={require('./images/india.png')} 
                                style={{
                                height: 24,
                                width: 24,
                                resizeMode: 'contain'
                                }} />
                            <View pointerEvents="none"
                                style= {{   flexDirection: 'row', flex: 1 }}>
                             <Text style= {{ fontSize: 20, paddingHorizontal: 10 }}> 
                                 +91
                             </Text>
                            <TextInput style={{ flex: 1, fontSize: 20 }} placeholder="Enter your mobile number" />
                        </View>
                        </View>
                    </TouchableOpacity>
                    </Animated.View>
                
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
                </Animatable.View>
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