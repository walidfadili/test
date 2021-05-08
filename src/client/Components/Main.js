import React, {Component} from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';

export default class Main extends Component {
    constructor(){
        super();
    }
    
    test() {
        console.log(this.props.route.params.res.data.user.username);}
    render(){
        return (
            <View>
                <Text>Welcome to your page: {this.props.route.params.res.data.user.username} !</Text>
            </View>
            );
    }
}