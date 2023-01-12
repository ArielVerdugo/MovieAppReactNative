import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';
import { backIcon } from '@/assets';
import { NAVIGATION } from '@/constants';
import { MY_LIST } from '@/constants/en';
import { Favorites } from '@/screens/Favorites/Favorites';
import { styles } from '@/screens/Favorites/Favorites.styles';

const Stack = createNativeStackNavigator();

export function FavouritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.favorites}
        component={Favorites}
        options={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitle: () => <FavoritesHeader />,
        }}
      />
    </Stack.Navigator>
  );
}

function FavoritesHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <TouchableHighlight accessibilityRole="button" onPress={() => onPress()}>
          <Image
            style={styles.iconHeader}
            source={backIcon}
            accessibilityIgnoresInvertColors={true}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textBack}>{MY_LIST}</Text>
      </View>
    </View>
  );
}
