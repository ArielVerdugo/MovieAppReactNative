import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { BankInformPlead } from '@/screens';

const Stack = createNativeStackNavigator();

export function BankInformPleadNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={BankInformPlead}
        name={NAVIGATION.bank}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
