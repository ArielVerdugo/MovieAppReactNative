import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { MovieDetails } from '@/screens';

const Stack = createNativeStackNavigator();

export function DetailNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={MovieDetails}
          name={NAVIGATION.details}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
