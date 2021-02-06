import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Screen/HomeScreen';
import AccountScreen from './Screen/AccountScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name= 'DREXEL MAP'
          component={HomeScreen}
          options={{
            headerTintColor: '#1E90FF', 
            headerTitleAlign: 'center', 
            headerTransparent: true, 
            headerStatusBarHeight: 30
          }}
        />
         <Stack.Screen
          name= 'Account'
          component={AccountScreen}
          options={{
            headerTintColor: '#1E90FF',
            headerTitleAlign: 'center', 
            headerTransparent: true, 
            headerStatusBarHeight: 30
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


