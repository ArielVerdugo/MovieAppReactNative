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
    backgroundColor: '#000000',
    flexDirection: 'column',
  },

  container_items_movies: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'column',
  },

  safe_area: {
    flex: 1,
  },

  image: {
    height: 400,
  },
  container_title_all_movies: {
    color: 'white',
    paddingTop: 10,
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
  },

  container_header_content: {
    height: 170,
    position: 'absolute',
    bottom: 0,
  },

  text: {
    color: 'white',
    fontSize: 12,
    paddingLeft: 40,
  },

  circle: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: 'white',
    borderColor: 'black',
    fontWeight: 'bold',
    marginLeft: 35,
    borderWidth: 1,
  },

  banner: {
    fontSize: 13,
    marginLeft: 90,
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 40,
    position: 'absolute',
    color: 'rgba(5, 130, 255, 1)',
    backgroundColor: 'rgba(5, 120, 255, 0.4)',
  },

  container_icons: {
    height: 50,
    flexDirection: 'row',
    marginLeft: 75,
    marginTop: 70,
  },

  plus_icon: {
    alignContent: 'flex-start',
    marginLeft: 10,
  },

  play_icon: {
    alignContent: 'center',
    marginLeft: 60,
  },

  info_icon: {
    marginLeft: 65,
  },

  container_icon_text: {
    height: 100,
    flexDirection: 'row',
  },

  icon_text_plus: {
    color: 'white',
    fontSize: 12,
    marginLeft: 85,
  },
  icon_text_play: {
    color: 'white',
    fontSize: 12,
    marginLeft: 60,
  },
  icon_text_info: {
    color: 'white',
    fontSize: 12,
    marginLeft: 78,
  },
});
