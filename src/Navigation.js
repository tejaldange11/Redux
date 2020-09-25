import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login1 from './screns/Login1';
import Welcome1 from './screns/Welcome1';
import { connect } from 'react-redux';

const Stack = createStackNavigator();

function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { props.isLoggedIn ?
            <Stack.Screen name="Welcome" component={Welcome1} />
            :
            <Stack.Screen name="Login" component={Login1} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  console.log("state",state.auth.isLoggedIn)
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(Navigation);




