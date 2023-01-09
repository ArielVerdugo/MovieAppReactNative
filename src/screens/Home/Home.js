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
import { addFavoriteMovieIcon, removeFavoriteMovieIcon } from '@/assets';
import { saveMovie, deleteMovie } from '@/actions/MovieActions';
import { isOneDayDiff } from '@/utils/utils';
import {
  EMPTY_MOVIES,
  KIDS,
  FANTASY_MOVIE,
  ACTION,
  MOVY_ORIGINAL,
  MY_LIST,
  PLAY,
  INFO,
  ALL_MOVIES,
} from '@/constants/en';

const image_background =
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

  const addMovieFavorites = useCallback(
    (item) => {
      if (moviesFav.includes(item)) {
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
        onPress={() => addMovieFavorites(item)}
        accessibilityIgnoresInvertColors={true}
      >
        <Image style={styles.icon_add} source={addFavoriteMovieIcon} />
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
        <Image style={styles.icon_add} source={addFavoriteMovieIcon} />
      </TouchableWithoutFeedback>
    </View>
  );

  const emptyComponent = () => <Text>{EMPTY_MOVIES}</Text>;
  const removeMovieFavs = (item) => {
    dispatch(deleteMovie(item));
  };

  if (
    isConnected === true ||
    (isConnected !== true && data != null && isOneDayDiff(date, new Date()))
  ) {
    return (
      <SafeAreaView style={styles.safe_area}>
        <ScrollView style={styles.container}>
          <ImageBackground
            source={require(image_background)}
            style={styles.image}
            resizeMode="cover"
          >
            <LinearGradient colors={['#00000000', '#000000']} style={styles.gradientHeader}>
              <View style={styles.container_header_content}>
                <View style={styles.container_type_movies_header}>
                  <Text style={styles.text}>{KIDS}</Text>
                  <View style={styles.circle} />
                  <Text style={styles.text}>{FANTASY_MOVIE}</Text>
                  <View style={styles.circle} />
                  <Text style={styles.text}>{ACTION}</Text>
                </View>
                <Text style={styles.banner}>{MOVY_ORIGINAL}</Text>
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
                  <Text style={styles.icon_text_plus}>{MY_LIST}</Text>
                  <Text style={styles.icon_text_play}>{PLAY}</Text>
                  <Text style={styles.icon_text_info}>{INFO}</Text>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
          <Text style={styles.container_title_all_movies}>{ALL_MOVIES}</Text>
          <FlatList
            horizontal={true}
            data={data.data.results}
            renderItem={Movie}
            ListEmptyComponent={emptyComponent}
            style={styles.container_movies}
          />
          <Text style={styles.container_title_all_movies}>{MY_LIST}</Text>
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
