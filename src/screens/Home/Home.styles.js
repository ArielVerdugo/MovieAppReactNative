import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC',
  },
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },

  listHeadLine: {
    color: '#333',
    fontSize: 21,
    fontWeight: 'bold',
  },

  gradientHeader: {
    height: '100%',
    width: '100%',
  },

  item: {
    width: 120,
    height: 50,
    alignItems: 'center',
  },

  itemText: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
  },

  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    height: 130,
    width: 90,
    marginLeft: 3,
  },

  name: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
  },

  container_items_movies: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'column',
  },

  safe_area: {
    flex: 1,
    backgroundColor: '#000000',
  },

  image: {
    height: 400,
  },
  container_title_all_movies: {
    color: 'white',
    paddingTop: 50,
    paddingLeft: 40,
    fontSize: 18,
  },

  container_title_favorite_movies: {
    color: 'white',
    fontSize: 18,
  },

  container_movies: {
    marginTop: 10,
    marginLeft: 35,
  },

  container_text: {
    height: '10%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
  },

  container_type_movies_header: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  container_header_content: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },

  text_kids: {
    color: 'white',
    fontSize: 14,
    flex: 0.2,
    textAlign: 'right',
  },

  textFantasy: {
    color: 'white',
    fontSize: 14,
    flex: 0.3,
    textAlign: 'center',
  },

  textAction: {
    color: 'white',
    fontSize: 14,
    flex: 0.2,
    textAlign: 'left',
  },

  content_circle: {
    flex: 0.2,
    alignItems: 'center',
  },

  circle: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: 'white',
    fontWeight: 'bold',
    borderWidth: 1,
  },

  banner: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 20,
    paddingTop: 5,
    marginLeft: 45,
    marginRight: 45,
    paddingBottom: 5,
    color: 'rgba(5, 130, 255, 1)',
    backgroundColor: 'rgba(5, 120, 255, 0.4)',
  },

  container_icons: {
    flexDirection: 'row',
    marginTop: 30,
  },

  container_plus_icon: {
    flex: 0.33,
    alignItems: 'flex-end',
  },

  container_play_icon: {
    flex: 0.2,
    alignItems: 'flex-end',
  },

  container_info_icon: {
    flex: 0.2,
    alignItems: 'flex-end',
  },

  plus_icon: {
    alignContent: 'center',
  },

  info_icon: {
    alignContent: 'center',
  },

  play_icon: {
    alignContent: 'center',
    marginLeft: 60,
  },

  container_icon_text: {
    flexDirection: 'row',
  },

  icon_text_plus: {
    color: 'white',
    flex: 0.35,
    textAlign: 'right',
    fontSize: 12,
  },
  icon_text_play: {
    color: 'white',
    flex: 0.26,
    textAlign: 'center',
    fontSize: 12,
  },
  icon_text_info: {
    color: 'white',
    flex: 0.15,
    textAlign: 'center',
    fontSize: 12,
  },

  icon_add: {
    width: 12,
    height: 12,
  },
});
