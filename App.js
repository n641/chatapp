import react,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/loginScreen';
import RegestersScreen from './screens/regestersScreen';
import Chatscreen from './screens/chatscreen'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="register">
      <Stack.Screen name="register" component={RegestersScreen} options={{ title: 'Sign up' }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="chat" component={Chatscreen} />
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
