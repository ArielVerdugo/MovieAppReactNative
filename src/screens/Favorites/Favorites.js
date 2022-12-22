/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import React from 'react';
import { Text, View, FlatList, Image, TouchableHighlight } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '@/screens/Home/Home.styles';
import { IMAGE_URL } from '@/controllers/routes';
import { NAVIGATION } from '@/constants';
import { getFav } from '@/selectors/MovieSelectors';
import { removeIcon } from '@/assets';
import { deleteMovie } from '@/actions/MovieActions';

export function Favorites({ navigation }) {
  const dispatch = useDispatch();

  const onFavMovie = ({ item }) => (
    <View>
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

  const headerComponent = () => <Text style={styles.listHeadLine}>Películas Favoritas</Text>;

  const emptyComponent = () => <Text>No tenés pelis favoritas</Text>;

  const itemSeparator = () => <View style={styles.separator} />;

  const removeMovieFavs = (item) => {
    dispatch(deleteMovie(item));
  };

  var moviesFav = useSelector(getFav);

  if (moviesFav != null) {
    return (
      <View>
        <FlatList
          ListHeaderComponentStyle={styles.listHeader}
          ListHeaderComponent={headerComponent}
          data={Object.values(moviesFav)}
          renderItem={onFavMovie}
          ItemSeparatorComponent={itemSeparator}
          ListEmptyComponent={emptyComponent}
        />
      </View>
    );
  }
}
