import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';

const images = [
  require('../assets/images/gallery1.jpg'),
  require('../assets/images/gallery2.jpg'),
  require('../assets/images/gallery3.jpg'),
  require('../assets/images/gallery4.jpg'),
  // Adicione mais imagens conforme necessário
];

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <Header logo={require('../assets/images/logo.png')} />
      
      <Text style={styles.title}>Galeria de Imagens</Text>
      
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <Image source={item} style={styles.galleryImage} />
        )}
        contentContainerStyle={styles.galleryContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  galleryContainer: {
    padding: 10,
  },
  galleryImage: {
    width: '48%',
    height: 150,
    margin: '1%',
    borderRadius: 8,
  },
});

export default GalleryScreen;