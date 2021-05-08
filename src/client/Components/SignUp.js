import React, {Component} from 'react';
import { View, TextInput, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';


export default class SignUp extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            email:'',
            password:'',
        }
        this.submit.bind(this)
    }
    
    submit(event){
        //event.preventDefault()
        
        const registred = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        
        axios.post('http://100.115.92.203:8080/app/signup',registred)
            .then(response => console.log(response.data))
        
        //window.location = '/'     To go to another page after register
        this.setState({
            username:'',    
            email:'',
            password:'',
        })
        
        this.props.navigation.navigate('Home')
    }

    
    
    render(){
    return (
        <View style = {{margin:20,marginTop:100}}>
            <TextInput 
                placeholder="Enter username"
                onChangeText={(text) => {this.setState({username: text})} }
                style = {{ borderWidth:2, borderColor: 'skyblue', margin: 20 }}
            />
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
        </View>
  );
}
}

