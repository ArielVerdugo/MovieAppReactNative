/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import { useTheme } from '@react-navigation/native';
import React, { Component } from 'react';
import { Text, View, FlatList, Image, ActivityIndicator, TouchableHighlight } from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { strings } from '@/localization';
import { styles } from '@/screens/Home/Home.styles';
import { typography } from '@/theme';
import { IMAGE_URL, routes } from '@/controllers/routes';
import { NAVIGATION } from '@/constants';
import { networkService } from '@/networking';
import { MovieController } from '@/controllers/MovieController';
import { favIcon } from '@/assets';

export function Home({ navigation }) {
  const movieController = new MovieController(networkService);
  const { isLoading, data } = useQuery(['allMovies'], movieController.getMovies);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  const onMovie = ({ item }) => (
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
  );

  const headerComponent = () => <Text style={styles.listHeadLine}>Películas</Text>;

  const emptyComponent = () => <Text>No hay pelis disponibles capo</Text>;

  const itemSeparator = () => <View style={styles.separator} />;

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
}
