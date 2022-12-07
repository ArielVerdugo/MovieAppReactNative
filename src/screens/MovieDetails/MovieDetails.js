import React from 'react';
import { Text, View } from 'react-native';

export function MovieDetails({ route }) {
  return (
    <View>
      <Text>{route.params.item}</Text>
    </View>
  );
}
