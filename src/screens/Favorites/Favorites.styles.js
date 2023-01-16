import { StyleSheet } from 'react-native';
import { blackColor } from '@/constants/colors';

export const styles = StyleSheet.create({
  containerMovies: {
    marginTop: 50,
  },

  movieListContainer: {
    flex: 1,
    backgroundColor: blackColor,
    flexDirection: 'column',
  },

  safeArea: {
    flex: 1,
    backgroundColor: blackColor,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
  },

  avatar: {
    height: 180,
    width: 125,
  },

  image: {
    marginTop: 10,
    marginHorizontal: '0.5%',
  },

  flatList: {
    marginTop: 40,
  },

  containerView: {
    alignItems: 'center',
  },

  iconHeader: {
    alignItems: 'flex-start',
  },

  textBack: {
    color: 'white',
    fontSize: 18,
    flex: 1,
  },

  containerText: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerIcon: {
    flex: 0.1,
    backgroundColor: blackColor,
  },
});
