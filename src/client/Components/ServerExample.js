import React, {Component} from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class ServerExample extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            response: "Click to connect to the server"
        }
    }
    
    connect = () => {
        const URL = "http://100.115.92.201:8080/";
        //this.setState({response: "State changed"});
        fetch(URL).then(response => {
            if(response.status == 200){
                return response.text();
            }
            else {
                throw new Error("Something is wrong");
            }
        }).then(resonseText => {
            this.setState({response: resonseText});
        }).catch(error => {
            console.log(error.message);
        });
    }
    
    render() {
        return (
            <View>
                <Text> {this.state.response} </Text>
                <Button title="connect" onPress={this.connect}></Button>
            </View>
            )
    }
}