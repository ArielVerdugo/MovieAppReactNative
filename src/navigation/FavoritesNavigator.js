import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native';
import React from 'react';
import { backIcon } from '@/assets';
import { NAVIGATION } from '@/constants';
import { MY_LIST } from '@/constants/en';
import { Favorites } from '@/screens/Favorites/Favorites';
import { styles } from '@/screens/Favorites/Favorites.styles';
import { blackColor } from '@/constants/colors';

const Stack = createNativeStackNavigator();

export function FavoritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.favorites}
        component={Favorites}
        options={{
          headerStyle: {
            backgroundColor: blackColor,
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
        <Image
          style={styles.iconHeader}
          source={backIcon}
          accessibilityIgnoresInvertColors={true}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textBack}>{MY_LIST}</Text>
      </View>
    </View>
  );
}
