import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Home, MovieDetails } from '@/screens';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NAVIGATION.home} component={Home} />
      <Stack.Screen
        component={MovieDetails}
        name={NAVIGATION.details}
        options={{ title: 'Movie Detail' }}
      />
    </Stack.Navigator>
  );
}
