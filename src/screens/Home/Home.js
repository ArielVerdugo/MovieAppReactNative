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
import {
  addFavoriteMovieIcon,
  imageBackgroundHeader,
  iconPlus,
  iconPlay,
  iconInfo,
} from '@/assets';
import { saveMovie, deleteMovie } from '@/actions/MovieActions';
import { isOneDayDiff } from '@/utils/utils';
import {
  EMPTY_MOVIES,
  KIDS,
  FANTASY_MOVIE,
  ALREADY_ADDED,
  ACTION,
  MOVY_ORIGINAL,
  MY_LIST,
  PLAY,
  INFO,
  ALL_MOVIES,
  RELATED,
} from '@/constants/en';
import { gradientColorEnd, gradientColorStart } from '@/constants/gradients';
import { useMovies } from '@/hooks/useMovies';
import { MoviesPaginated } from '@/components/MoviesPaginated';

export function Home({ navigation }) {
  const movieController = new MovieController(networkService);
  const [isConnected, setIsConected] = useState(false);
  const [date, setDate] = useState(new Date());
  const { isLoading, data, isError } = useQuery(['allMovies'], movieController.getMovies);
  const dispatch = useDispatch();
  const moviesFav = useSelector(getFavoriteMovies);
  const moviesByPage = useMovies(navigation);

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
        alert(ALREADY_ADDED);
      } else {
        dispatch(saveMovie(item));
      }
    },
    [dispatch, moviesFav]
  );

  if (isLoading || moviesByPage.isLoading) {
    return <ActivityIndicator />;
  }

  const Movie = ({ item }) => (
    <View style={styles.movieListContainer}>
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
        <Image style={styles.iconAdd} source={addFavoriteMovieIcon} />
      </TouchableWithoutFeedback>
    </View>
  );

  const MovieFavorites = ({ item }) => (
    <View style={styles.movieListContainer}>
      <TouchableHighlight accessibilityRole="button" onPress={() => goDetails(item)}>
        <Image
          style={styles.avatar}
          accessibilityIgnoresInvertColors={true}
          source={{ uri: `${IMAGE_URL + item.backdropPath}` }}
        />
      </TouchableHighlight>
      <TouchableWithoutFeedback
        accessibilityRole="button"
        onPress={() => removeMovieFromFavorites(item)}
        accessibilityIgnoresInvertColors={true}
      >
        <Image style={styles.iconAdd} source={addFavoriteMovieIcon} />
      </TouchableWithoutFeedback>
    </View>
  );

  const RelatedMovies = ({ item }) => (
    <TouchableHighlight accessibilityRole="button" onPress={() => goDetails(item)}>
      <MoviesPaginated movie={item} />
    </TouchableHighlight>
  );

  const emptyComponent = () => <Text>{EMPTY_MOVIES}</Text>;
  const removeMovieFromFavorites = (item) => {
    dispatch(deleteMovie(item));
  };

  if (
    isConnected === true ||
    (isConnected !== true && data != null && isOneDayDiff(date, new Date()))
  ) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <ImageBackground source={imageBackgroundHeader} style={styles.image} resizeMode="cover">
            <LinearGradient
              colors={[gradientColorStart, gradientColorEnd]}
              style={styles.gradientHeader}
            >
              <View style={styles.containerHeaderContent}>
                <View style={styles.containerTypeMoviesHeader}>
                  <Text style={styles.textKids}>{KIDS}</Text>
                  <View style={styles.contentCircle}>
                    <View style={styles.circle} />
                  </View>
                  <Text style={styles.textFantasy}>{FANTASY_MOVIE}</Text>
                  <View style={styles.contentCircle}>
                    <View style={styles.circle} />
                  </View>
                  <Text style={styles.textAction}>{ACTION}</Text>
                </View>
                <Text style={styles.banner}>{MOVY_ORIGINAL}</Text>
                <View style={styles.containerIcons} accessibilityIgnoresInvertColors={true}>
                  <View style={styles.containerPlusIcon}>
                    <Image style={styles.plusIcon} source={iconPlus} />
                  </View>
                  <View style={styles.containerPlayIcon}>
                    <Image style={styles.plusIcon} source={iconPlay} />
                  </View>
                  <View style={styles.containerInfoIcon}>
                    <Image style={styles.infoIcon} source={iconInfo} />
                  </View>
                </View>
                <View style={styles.containerIconText}>
                  <Text style={styles.iconTextPlus}>{MY_LIST}</Text>
                  <Text style={styles.iconTextPlay}>{PLAY}</Text>
                  <Text style={styles.iconTextInfo}>{INFO}</Text>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
          <Text style={styles.containerTitleAllMovies}>{ALL_MOVIES}</Text>
          <FlatList
            horizontal={true}
            data={data.data.results}
            renderItem={Movie}
            ListEmptyComponent={emptyComponent}
            style={styles.containerMovies}
          />
          <Text style={styles.containerTitleAllMovies}>{MY_LIST}</Text>
          <FlatList
            horizontal={true}
            data={moviesFav}
            renderItem={MovieFavorites}
            ListEmptyComponent={emptyComponent}
            style={styles.containerMovies}
          />
          <Text style={styles.containerTitleAllMovies}>{RELATED}</Text>
          <FlatList
            horizontal={true}
            onEndReached={moviesByPage.loadMore}
            data={moviesByPage.movies}
            renderItem={RelatedMovies}
            ListEmptyComponent={emptyComponent}
            style={styles.containerMovies}
          />
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <Text>{EMPTY_MOVIES}</Text>;
  }
}
