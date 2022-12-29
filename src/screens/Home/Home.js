/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, ActivityIndicator, TouchableHighlight } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import { styles } from '@/screens/Home/Home.styles';
import { IMAGE_URL, routes } from '@/controllers/routes';
import { NAVIGATION } from '@/constants';
import { getFav } from '@/selectors/MovieSelectors';
import { networkService } from '@/networking';
import { MovieController } from '@/controllers/MovieController';
import { addIcon } from '@/assets';
import { saveMovie } from '@/actions/MovieActions';

export function Home({ navigation }) {
  const movieController = new MovieController(networkService);
  const [isConnected, setIsConected] = useState(false);
  const [date, setDate] = useState(new Date());
  //const { isLoading, data } = useQuery(['allMovies'], movieController.getMovies, {
  //cacheTime: 0,
  //});

  const { isLoading, data, isError } = useQuery(['allMovies'], movieController.getMovies);

  const dispatch = useDispatch();
  const moviesFav = useSelector(getFav);

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
  }, []);

  const dateDiffInDays = (a, b) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    if (Math.floor((utc2 - utc1) / _MS_PER_DAY) < 2) {
      return true;
    } else {
      return false;
    }
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  const onMovie = ({ item }) => (
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
      <TouchableWithoutFeedback accessibilityRole="button" onPress={() => addMovieFavs(item)}>
        <Image source={addIcon} />
      </TouchableWithoutFeedback>
    </View>
  );

  const headerComponent = () => <Text style={styles.listHeadLine}>Películas</Text>;

  const emptyComponent = () => <Text>No hay pelis disponibles capo</Text>;

  const itemSeparator = () => <View style={styles.separator} />;

  const addMovieFavs = (item) => {
    if (moviesFav !== null) {
      moviesFav.includes(item, 0) ? alert('ya está agregada') : dispatch(saveMovie(item));
    } else {
      dispatch(saveMovie(item));
    }
  };

  // eslint-disable-next-line eqeqeq
  if (
    isConnected == true ||
    (isConnected != true && data != null && dateDiffInDays(date, new Date()))
  ) {
    return (
      <View>
        <FlatList
          ListHeaderComponentStyle={styles.listHeader}
          ListHeaderComponent={headerComponent}
          data={data.data.results}
          renderItem={onMovie}
          ItemSeparatorComponent={itemSeparator}
          ListEmptyComponent={emptyComponent}
        />
      </View>
    );
  } else {
    return (
      <View>
        <Text> NO HAY NADA QUE MOSTRAR </Text>
      </View>
    );
  }
}
