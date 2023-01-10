import React from 'react';
import { Text, View, FlatList, Image, TouchableHighlight } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '@/screens/Home/Home.styles';
import { IMAGE_URL } from '@/controllers/routes';
import { NAVIGATION } from '@/constants';
import { getFavoriteMovies } from '@/selectors/MovieSelectors';
import { removeIcon } from '@/assets';
import { deleteMovie } from '@/actions/MovieActions';
import { TITLE_FAV_MOVIES, EMPTY_FAV_MOVIES } from '@/constants/en';

export function Favorites({ navigation }) {
  const dispatch = useDispatch();

  const FavoriteMovie = ({ item }) => (
    <View accessibilityIgnoresInvertColors={true}>
      <TouchableHighlight
        accessibilityRole="button"
        onPress={() => navigation.navigate(NAVIGATION.details, { item: item })}
      >
        <View style={styles.item}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{ uri: `${IMAGE_URL + item.backdropPath}` }} />
          </View>
          <Text style={styles.name}>{item.originalTitle}</Text>
        </View>
      </TouchableHighlight>
      <TouchableWithoutFeedback accessibilityRole="button" onPress={() => removeMovieFavs(item)}>
        <Image source={removeIcon} />
      </TouchableWithoutFeedback>
    </View>
  );

  const headerComponent = () => <Text style={styles.listHeadLine}>{TITLE_FAV_MOVIES}</Text>;

  const emptyComponent = () => <Text>{EMPTY_FAV_MOVIES}</Text>;

  const itemSeparator = () => <View style={styles.separator} />;

  const removeMovieFavs = (item) => {
    dispatch(deleteMovie(item));
  };

  var moviesFav = useSelector(getFavoriteMovies);

  if (moviesFav != null) {
    return (
      <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={headerComponent}
        data={Object.values(moviesFav)}
        renderItem={FavoriteMovie}
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={emptyComponent}
      />
    );
  }
}
