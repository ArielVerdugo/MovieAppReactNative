import { StyleSheet } from 'react-native';
import { backgroundBlack, textAverage, buttonDetail, textColor } from '@/theme/theme';

export const styles = StyleSheet.create({
  imageHeader: {
    height: 300,
    width: '100%',
  },

  avatar: {
    height: 130,
    width: 90,
    marginLeft: 3,
  },

  container: {
    flex: 1,
    backgroundColor: backgroundBlack.colors.primary,
  },

  titleRecommendMovies: {
    color: 'white',
    margin: 10,
    fontSize: 18,
  },

  container2: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
  },
  textTtitle: {
    color: textColor.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },

  textAverage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: textAverage.colors.primary,
  },

  textLanguage: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  textDate: {
    color: textColor.colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  containerTextHeader: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
  },

  textOverview: {
    color: textColor.colors.primary,
    fontSize: 14,
    margin: 10,
  },

  buttonPlay: {
    height: 45,
    borderRadius: 8,
    margin: 10,
    backgroundColor: buttonDetail.colors.primary,
  },

  buttonDownload: {
    height: 45,
    borderRadius: 8,
    marginTop: 5,
    margin: 10,
    backgroundColor: buttonDetail.colors.primary,
  },

  containerMovies: {
    margin: 10,
  },

  movieListContainer: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'column',
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },

  spinner: {
    color: textColor.colors.primary,
  },
});
