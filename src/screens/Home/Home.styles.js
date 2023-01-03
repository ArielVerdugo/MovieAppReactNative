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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },

  avatarContainer: {
    borderRadius: 10,
    height: 40,
    width: 40,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    height: 55,
    width: 55,
  },

  name: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },

  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '60%',
    justifyContent: 'center',
  },
  container_text: {
    height: 100,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
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

  container_banner: {
    height: 100,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 1,
  },

  banner: {
    fontSize: 13,
    marginLeft: 90,
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 10,
    position: 'absolute',
    color: 'rgba(5, 130, 255, 1)',
    backgroundColor: 'rgba(5, 120, 255, 0.4)',
    paddingBottom: 5,
  },

  container_icons: {
    height: 100,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 1,
    paddingTop: 60,
    marginLeft: 75,
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
    position: 'absolute',
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
