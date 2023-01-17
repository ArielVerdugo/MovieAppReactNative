import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { styles } from '@/screens/MovieDetails/MovieDetails.styles';
import { IMAGE_URL } from '@/controllers/routes';
import { Button } from '@/components';
import { averageFormatt } from '@/utils/utils';
import { MATCH_TEXT, RELEASE_TEXT } from '@/constants/en';

export function MovieDetails({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.avatar}
        accessibilityIgnoresInvertColors={true}
        source={{ uri: `${IMAGE_URL + route.params.item.backdropPath}` }}
      />
      <ScrollView>
        <Text style={styles.textTtitle}>{route.params.item.originalTitle}</Text>
        <View style={styles.containerTextHeader}>
          <Text style={styles.textAverage}>
            {averageFormatt(route.params.item.voteAverage) + MATCH_TEXT}
          </Text>
          <Text style={styles.textLanguaje}>{RELEASE_TEXT}</Text>
          <Text style={styles.textDate}>{route.params.item.releaseDate}</Text>
        </View>
        <TouchableHighlight accessibilityRole="button" style={styles.buttonReproducir}>
          <Button title="Play" />
        </TouchableHighlight>
        <TouchableHighlight accessibilityRole="button" style={styles.buttonDescargar}>
          <Button title="Download" />
        </TouchableHighlight>
        <Text style={styles.textOverview}>{route.params.item.overview}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
