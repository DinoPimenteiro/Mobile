import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../estillo/styles.js';
import Header from '../components/Header';

const ServiceScreen = () => {
  const handleLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.containerScroll}>
      <Header logo={require('../assets/images/logomarca.png')} />

      <View style={styles.content}>
        <Text style={styles.title}>Nossos Contatos</Text>

        <View style={styles.row}>
          <TouchableOpacity 
          onPress={() => handleLink('https://www.instagram.com/generalmotors')}>
            <Image
              style={styles.image}
              source={require('../assets/images/instagram.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleLink('https://www.linkedin.com/company/general-motors')}>
            <Image
              style={styles.image}
              source={require('../assets/images/linkedin.png.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleLink('https://www.facebook.com/generalmotors')}>
            <Image
              style={styles.image}
              source={require('../assets/images/facebook.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleLink('https://twitter.com/generalmotors')}>
            <Image
              style={styles.image}
              source={require('../assets/images/twitter.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Entre em contato com a GM pelas redes sociais oficiais.</Text>
      </View>
    </ScrollView>
  );
};

export default ServiceScreen;
