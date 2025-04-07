import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header logo={require('../assets/images/logo.png')} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Sobre Nossa Marca</Text>
        
        <Image 
          source={require('../assets/images/about.jpg')} 
          style={styles.image}
          resizeMode="cover"
        />
        
        <Text style={styles.text}>
          Fundada em 2010, nossa marca tem como missão oferecer produtos de alta qualidade com 
          comprometimento ambiental e social. Acreditamos que é possível unir excelência em 
          produtos com responsabilidade socioambiental.
        </Text>
        
        <Text style={styles.subtitle}>Nossos Valores</Text>
        <Text style={styles.text}>
          • Qualidade acima de tudo{"\n"}
          • Sustentabilidade{"\n"}
          • Inovação constante{"\n"}
          • Satisfação do cliente
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
});

export default AboutScreen;