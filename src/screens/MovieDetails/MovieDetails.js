import { Text, View, Image, FlatList, ActivityIndicator, Spinner } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { styles } from '@/screens/MovieDetails/MovieDetails.styles';
import { IMAGE_URL } from '@/controllers/routes';
import { Button } from '@/components';
import { averageFormat } from '@/utils/utils';
import { MATCH_TEXT, RELEASE_TEXT, PLAY, DOWNLOAD, EMPTY_MOVIES, RELATED } from '@/constants/en';
import { useMovies } from '@/hooks/useMovies';

export function MovieDetails({ route, navigation }) {
  const moviesByPage = useMovies(navigation);

  if (moviesByPage.isLoading) {
    return <ActivityIndicator />;
  }

  const emptyComponent = () => <Text style={styles.textAverage}>{EMPTY_MOVIES}</Text>;

  const Movie = ({ item }) => (
    <View style={styles.movieListContainer}>
      <TouchableHighlight accessibilityRole="button" onPress={() => moviesByPage.goDetails(item)}>
        <Image
          style={styles.avatar}
          accessibilityIgnoresInvertColors={true}
          source={{ uri: `${IMAGE_URL + item.backdropPath}` }}
        />
      </TouchableHighlight>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imageHeader}
        accessibilityIgnoresInvertColors={true}
        source={{ uri: `${IMAGE_URL}${route.params.item.backdropPath}` }}
      />
      <ScrollView>
        <Text style={styles.textTtitle}>{route.params.item.originalTitle}</Text>
        <View style={styles.containerTextHeader}>
          <Text style={styles.textAverage}>
            {averageFormat(route.params.item.voteAverage) + MATCH_TEXT}
          </Text>
          <Text style={styles.textLanguage}>{RELEASE_TEXT}</Text>
          <Text style={styles.textDate}>{route.params.item.releaseDate}</Text>
        </View>
        <TouchableHighlight accessibilityRole="button" style={styles.buttonPlay}>
          <Button title={PLAY} />
        </TouchableHighlight>
        <TouchableHighlight accessibilityRole="button" style={styles.buttonDownload}>
          <Button title={DOWNLOAD} />
        </TouchableHighlight>
        <Text style={styles.textOverview}>{route.params.item.overview}</Text>
        <Text style={styles.titleRecommendMovies}>{RELATED}</Text>
        <FlatList
          horizontal={true}
          onEndReached={moviesByPage.loadMore}
          data={moviesByPage.movies}
          renderItem={Movie}
          ListEmptyComponent={emptyComponent}
          style={styles.containerMovies}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
