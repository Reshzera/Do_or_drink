import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import ChangeGame from './Pages/ChangeGame';
import Game from './Pages/Game/index';
import AddGame from './Pages/AddGame';

import { storeData } from './datagames/AsyncStoreagefunc';
import { DecksData } from './datagames/datatest';



const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'BebasNeue': require('./fonts/BebasNeue-Regular.ttf'),
    'RobotoLight': require('./fonts/RobotoCondensed-Light.ttf'),
    'BG': require('./fonts/Burbank-Big-Condensed-Black.ttf'),
    'Oswald': require('./fonts/Oswald-Regular.ttf')
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ChangeGame" screenOptions={{headerShown: false}}>
          <Stack.Screen name="ChangeGame" component={ChangeGame} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="AddGame" component={AddGame} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}