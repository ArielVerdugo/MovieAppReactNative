import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

export function MovieDetails({ navigation, route }) {
  return (
    <View>
      <Text>{route.params.item.overview}</Text>
    </View>
  );
}
