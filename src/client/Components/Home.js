import React, {Component} from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
        }
        this.submit.bind(this)
    }
    
    submit(event){
        //event.preventDefault()
        
        const registred = {
            email: this.state.email,
            password: this.state.password
        }
        
        axios.post('http://100.115.92.203:8080/app/auth',registred)     // L'adresse se trouvant au lancement
            .then(response => {
        //window.location = '/'     To go to another page after register
        this.props.navigation.navigate('Main', {res: response})})
    }
    
    render(){
        return (
            <View>
                <TextInput 
                    placeholder="Enter email"
                    onChangeText={(text) => {this.setState({email: text})} }
                    style = {{ borderWidth:2, borderColor: 'skyblue', margin: 20 }}
                />
                <TextInput 
                    placeholder="Enter password"
                    secureTextEntry={true}
                    onChangeText={(text) => {this.setState({password: text})} }
                    style = {{ borderWidth:2, borderColor: 'skyblue', margin: 20 }}
                />
                <Button title="Submit" onPress={()=>{this.submit()}} />
                <Button title="No account? SignUp" onPress={() => this.props.navigation.navigate('SignUp')} />
            </View>
            );
    }
    
}