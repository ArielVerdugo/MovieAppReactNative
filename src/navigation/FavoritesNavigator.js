import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { backIcon } from '@/assets';
import { NAVIGATION } from '@/constants';
import { MY_LIST } from '@/constants/en';
import { Favorites } from '@/screens/Favorites/Favorites';
import { styles } from '@/screens/Favorites/Favorites.styles';
import { blackColor } from '@/constants/colors';
import { TABS } from '@/constants/navigation';

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
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <TouchableWithoutFeedback
          accessibilityRole="button"
          onPress={() => navigation.jumpTo(TABS.home)}
          accessibilityIgnoresInvertColors={true}
        >
          <Image
            style={styles.iconHeader}
            source={backIcon}
            accessibilityIgnoresInvertColors={true}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textBack}>{MY_LIST}</Text>
      </View>
    </View>
  );
}
