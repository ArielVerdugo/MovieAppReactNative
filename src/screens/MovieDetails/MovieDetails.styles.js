import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  avatar: {
    height: 300,
    width: '100%',
    backgroundColor: '#CCC',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  safeArea: {
    flex: 1,
  },

  textTtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },

  textAverage: {
    color: '#008000',
    fontSize: 14,
    fontWeight: 'bold',
  },

  textLanguaje: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  textDate: {
    color: 'white',
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
    color: 'white',
    fontSize: 14,
    margin: 10,
  },

  buttonReproducir: {
    height: 45,
    borderRadius: 10,
    backgroundColor: '#e7ebda',
    margin: 10,
  },

  buttonDescargar: {
    height: 45,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#e7ebda',
    margin: 10,
  },
});
