import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './screns/AuthScreen';
import Login from './screns/Login';
import Welcome from './screns/Welcome';
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="AuthScreen" component={AuthScreen} /> */}
        <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;