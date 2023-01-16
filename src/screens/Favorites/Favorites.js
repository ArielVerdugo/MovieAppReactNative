import React, { useCallback } from 'react';
import { Text, View, FlatList, Image, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { NAVIGATION } from '@/constants';
import { styles } from '@/screens/Favorites/Favorites.styles';
import { IMAGE_URL } from '@/controllers/routes';
import { getFavoriteMovies } from '@/selectors/MovieSelectors';
import { EMPTY_FAV_MOVIES } from '@/constants/en';
import { backgroundBlack } from '@/theme/theme';

export function Favorites({ navigation }) {
  const FavoriteMovie = ({ item }) => (
    <TouchableHighlight
      accessibilityRole="button"
      style={[styles.containerView, { colors: theme.colors.primary }]}
      onPress={() => goDetails(item)}
    >
      <View style={styles.image}>
        <Image
          style={styles.avatar}
          accessibilityIgnoresInvertColors={true}
          source={{ uri: `${IMAGE_URL + item.backdropPath}` }}
        />
      </View>
    </TouchableHighlight>
  );

  const emptyComponent = () => <Text>{EMPTY_FAV_MOVIES}</Text>;

  const theme = useTheme();

  const moviesFav = useSelector(getFavoriteMovies);

  const goDetails = useCallback(
    (item) => {
      navigation.navigate(NAVIGATION.details, { item });
    },
    [navigation]
  );

  if (moviesFav != null) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: backgroundBlack.colors.primary }]}>
        <FlatList
          numColumns={3}
          data={moviesFav}
          renderItem={FavoriteMovie}
          ListEmptyComponent={emptyComponent}
          style={styles.flatList}
        />
      </SafeAreaView>
    );
  }
}
