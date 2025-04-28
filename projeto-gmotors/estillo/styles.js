import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },

  text: {
    fontSize: 18,
    lineHeight: 24,
    color: '#666',
    marginBottom: 15,
    textAlign: 'left',
  },

 image: {
  width: 130,
  height: 170,
  borderRadius: 8,
  margin: 10,
},

mainImage: {
  width: 300,
  height: 200,
  borderRadius: 12,
  marginVertical: 20,
},

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#99D1FF',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#11365f',
  },

  logo: {
    width: 100,
    height: 100,
    padding: 15,
  },

  titleHeader: {
    fontSize: 29,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#333',
  },

  button: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
  },
});
