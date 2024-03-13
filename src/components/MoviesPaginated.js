import React from 'react';
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { IMAGE_URL } from '@/controllers/routes';

const styles = StyleSheet.create({
  movieListContainer: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'column',
  },
  avatar: {
    height: 130,
    width: 90,
    marginLeft: 3,
  },
});

export const MoviesPaginated = ({ movie }) => (
  <View style={styles.movieListContainer}>
    <Image
      style={styles.avatar}
      accessibilityIgnoresInvertColors={true}
      source={{ uri: `${IMAGE_URL}${movie.backdropPath}` }}
    />
  </View>
);
