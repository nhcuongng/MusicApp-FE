import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Login} from './src/screens/Login';

// import './gesture-handler';

const Stack = createStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
import Music from './src/screens/Music';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Music} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
