import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';

import Mapa from './pages/maps';
import Locais from './pages/places';
import Quiz from './pages/quiz';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Mapa') {
              iconName = 'map';
            } else if (route.name === 'Locais') {
              iconName = 'map-pin';
            } else if (route.name === 'Quiz') {
                iconName = 'help-circle';
            }

            // You can return any component that you like here!
            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FFF',
          inactiveTintColor: '#FFC9C9',
          style:{
              backgroundColor:'#FF5050',
              borderTopLeftRadius:40, 
              borderTopRightRadius:40,
              position:'absolute',
              bottom: 0,
              padding:10,
              
              height: 70,
              zIndex: 8,
              paddingBottom:10
          }
        }}
      >
        <Tab.Screen name="Mapa" component={Mapa} />
        <Tab.Screen name="Locais" component={Locais} />
        <Tab.Screen name="Quiz" component={Quiz} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}