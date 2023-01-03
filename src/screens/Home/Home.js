import React, { useState, useEffect, useCallback } from 'react';
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
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import { styles } from '@/screens/Home/Home.styles';
import { IMAGE_URL } from '@/controllers/routes';
import { NAVIGATION } from '@/constants';
import { getFavoriteMovies } from '@/selectors/MovieSelectors';
import { networkService } from '@/networking';
import { MovieController } from '@/controllers/MovieController';
import { addIcon } from '@/assets';
import { saveMovie } from '@/actions/MovieActions';
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
    <View>
      <TouchableHighlight accessibilityRole="button" onPress={() => goDetails(item)}>
        <View style={styles.item} accessibilityIgnoresInvertColors={true}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{ uri: `${IMAGE_URL + item.backdropPath}` }} />
          </View>
          <Text style={styles.name}>{item.originalTitle}</Text>
        </View>
      </TouchableHighlight>
      <TouchableWithoutFeedback
        accessibilityRole="button"
        onPress={() => addMovieFavourites(item)}
        accessibilityIgnoresInvertColors={true}
      >
        <Image source={addIcon} />
      </TouchableWithoutFeedback>
    </View>
  );

  const headerComponent = () => <Text style={styles.listHeadLine}>{MOVIES}</Text>;

  const emptyComponent = () => <Text>{EMPTY_MOVIES}</Text>;

  const itemSeparator = () => <View style={styles.separator} />;

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
      <View style={styles.container}>
        <ImageBackground source={require(imgae_background)} resizeMode="cover" style={styles.image}>
          <View>
            <View style={styles.container_text}>
              <Text style={styles.text}>Kids</Text>
              <View style={styles.circle} />
              <Text style={styles.text}>Fantasy Movie</Text>
              <View style={styles.circle} />
              <Text style={styles.text}>Action</Text>
            </View>
            <View style={styles.container_banner}>
              <Text style={styles.banner}>MOVY ORIGINAL</Text>
            </View>
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
        </ImageBackground>
      </View>
    );
  } else {
    return <Text>{EMPTY_MOVIES}</Text>;
  }
}
