import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ServerExample from './Components/ServerExample';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Main from './Components/Main';

/*function HomeScreen(){
    return (
        <View>
            <Text>The home from App</Text>
        </View>
        )
}*/

const Stack = createStackNavigator()

export default function App() {
            return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Main" component={Main} />
                </Stack.Navigator>
            </NavigationContainer>
            );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
