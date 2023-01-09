import React, { useState, useEffect, useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/screens/Home/Home.styles';
import { IMAGE_URL } from '@/controllers/routes';
import { NAVIGATION } from '@/constants';
import { getFavoriteMovies } from '@/selectors/MovieSelectors';
import { networkService } from '@/networking';
import { MovieController } from '@/controllers/MovieController';
import { addFavoritesIcon } from '@/assets';
import { saveMovie, deleteMovie } from '@/actions/MovieActions';
import { isOneDayDiff } from '@/utils/utils';
import { EMPTY_MOVIES, MOVIES } from '@/constants/en';

const imgae_background =
  '/Users/arielverdugo/ejerciciosReactNative/MovieAppReactNative/src/assets/img/background_home.png/';
const icon_plus =
  '/Users/arielverdugo/ejerciciosReactNative/MovieAppReactNative/src/assets/img/Path.png';
const icon_play =
  '/Users/arielverdugo/ejerciciosReactNative/MovieAppReactNative/src/assets/img/Shape.png';
const icon_info =
  '/Users/arielverdugo/ejerciciosReactNative/MovieAppReactNative/src/assets/img/Shape-3.png';

export function Home({ navigation }) {
  const movieController = new MovieController(networkService);
  const [isConnected, setIsConected] = useState(false);
  const [date, setDate] = useState(new Date());
  const { isLoading, data, isError } = useQuery(['allMovies'], movieController.getMovies);
  const dispatch = useDispatch();
  const moviesFav = useSelector(getFavoriteMovies);

  useEffect(() => {
    if (!isError) {
      setDate(new Date());
    }
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, [isError]);

  const goDetails = useCallback(
    (item) => {
      navigation.navigate(NAVIGATION.details, { item: item });
    },
    [navigation]
  );

  const addMovieFavourites = useCallback(
    (item) => {
      if (moviesFav.includes(item, 0)) {
        alert('ya está agregada');
      } else {
        dispatch(saveMovie(item));
      }
    },
    [dispatch, moviesFav]
  );

  if (isLoading) {
    return <ActivityIndicator />;
  }

  const Movie = ({ item }) => (
    <View style={styles.container_items_movies}>
      <TouchableHighlight accessibilityRole="button" onPress={() => goDetails(item)}>
        <Image
          style={styles.avatar}
          accessibilityIgnoresInvertColors={true}
          source={{ uri: `${IMAGE_URL + item.backdropPath}` }}
        />
      </TouchableHighlight>
      <TouchableWithoutFeedback
        accessibilityRole="button"
        onPress={() => addMovieFavourites(item)}
        accessibilityIgnoresInvertColors={true}
      >
        <Image source={addFavoritesIcon} />
      </TouchableWithoutFeedback>
    </View>
  );

  const MovieFavorites = ({ item }) => (
    <View style={styles.container_items_movies}>
      <TouchableHighlight accessibilityRole="button" onPress={() => goDetails(item)}>
        <Image
          style={styles.avatar}
          accessibilityIgnoresInvertColors={true}
          source={{ uri: `${IMAGE_URL + item.backdropPath}` }}
        />
      </TouchableHighlight>
      <TouchableWithoutFeedback
        accessibilityRole="button"
        onPress={() => removeMovieFavs(item)}
        accessibilityIgnoresInvertColors={true}
      >
        <Image source={addFavoritesIcon} />
      </TouchableWithoutFeedback>
    </View>
  );

  const headerComponent = () => <Text style={styles.listHeadLine}>{MOVIES}</Text>;

  const emptyComponent = () => <Text>{EMPTY_MOVIES}</Text>;

  const itemSeparator = () => <View style={styles.separator} />;

  const removeMovieFavs = (item) => {
    dispatch(deleteMovie(item));
  };

  if (
    isConnected === true ||
    (isConnected !== true && data != null && isOneDayDiff(date, new Date()))
  ) {
    return (
      /*<FlatList
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={headerComponent}
        data={data.data.results}
        renderItem={Movie}
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={emptyComponent}
      />*/
      <SafeAreaView style={styles.safe_area}>
        <ScrollView style={styles.container}>
          <ImageBackground
            source={require(imgae_background)}
            style={styles.image}
            resizeMode="cover"
          >
            <LinearGradient
              colors={['#00000000', '#000000']}
              style={{ height: '100%', width: '100%' }}
            >
              <View style={styles.container_header_content}>
                <View style={styles.container_type_movies_header}>
                  <Text style={styles.text}>Kids</Text>
                  <View style={styles.circle} />
                  <Text style={styles.text}>Fantasy Movie</Text>
                  <View style={styles.circle} />
                  <Text style={styles.text}>Action</Text>
                </View>
                <Text style={styles.banner}>MOVY ORIGINAL</Text>
                <View style={styles.container_icons} accessibilityIgnoresInvertColors={true}>
                  <Image
                    style={styles.plus_icon}
                    source={require(icon_plus)}
                    accessibilityIgnoresInvertColors={true}
                  />
                  <Image
                    style={styles.play_icon}
                    source={require(icon_play)}
                    accessibilityIgnoresInvertColors={true}
                  />
                  <Image
                    style={styles.info_icon}
                    source={require(icon_info)}
                    accessibilityIgnoresInvertColors={true}
                  />
                </View>
                <View style={styles.container_icon_text} accessibilityIgnoresInvertColors={true}>
                  <Text style={styles.icon_text_plus}>My list</Text>
                  <Text style={styles.icon_text_play}>Play</Text>
                  <Text style={styles.icon_text_info}>Info</Text>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
          <Text style={styles.container_title_all_movies}>{'All Movies'}</Text>
          <FlatList
            horizontal={true}
            data={data.data.results}
            renderItem={Movie}
            ListEmptyComponent={emptyComponent}
            style={styles.container_movies}
          />
          <Text style={styles.container_title_all_movies}>{'My List'}</Text>
          <FlatList
            horizontal={true}
            data={moviesFav}
            renderItem={MovieFavorites}
            ListEmptyComponent={emptyComponent}
            style={styles.container_movies}
          />
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <Text>{EMPTY_MOVIES}</Text>;
  }
}
