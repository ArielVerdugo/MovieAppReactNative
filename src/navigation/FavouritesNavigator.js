import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Favorites } from '@/screens/Favorites/Favorites';

const Stack = createNativeStackNavigator();

export function FavouritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.favorites}
        component={Favorites}
        options={{ headerLargeTitle: true }}
      />
    </Stack.Navigator>
  );
}
