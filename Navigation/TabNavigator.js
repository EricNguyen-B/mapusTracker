import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from '../Screen/HomeScreen';
import AccountScreen from '../Screen/AccountScreen';

const Tab = createBottomTabNavigator();

function BottomNavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Map') {
                    iconName = focused ? 'ios-map-sharp' : 'ios-map-outline';
                  } else if (route.name === 'List') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: '#003399',
                inactiveTintColor: 'gray',
              }}
      >
        <Tab.Screen 
            name="Map" 
            component={HomeScreen} 
        />
        <Tab.Screen 
            name="List"
            component={AccountScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    tabStyle: {
        fontSize: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

export default BottomNavBar;