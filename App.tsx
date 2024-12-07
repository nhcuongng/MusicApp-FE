import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Login} from './src/screens/Login';

// import './gesture-handler';

const Stack = createStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Login/Home';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
