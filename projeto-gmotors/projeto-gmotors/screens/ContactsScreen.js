import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../estillo/styles.js';
import Header from '../components/Header';

const ContactScreen = () => {

  const handleLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.containerScroll}>
      <Header logo={require('../assets/images/logomarca.png')} />

      <View style={styles.content}>
        <Text style={styles.title}>Nosso Grupo</Text>

        <View style={styles.row}>
          <TouchableOpacity 
          style={styles.button}
          onPress={() => handleLink('https://www.chevrolet.com')}>
            <Image
              style={styles.image}
              source={require('../assets/images/chevrolet.png')}
              resizeMode="contain"
            />
          <Text style={styles.subtitle}>
            Chevrolet
          </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.button}
          onPress={() => handleLink('https://www.cadillac.com')}>
            <Image
              style={styles.image}
              source={require('../assets/images/cadillac.png')}
              resizeMode="contain"
            />
          <Text style={styles.subtitle}>
            Cadillac
          </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity 
          style={styles.button}
          onPress={() => handleLink('https://www.opel.com')}>
            <Image
              style={styles.image}
              source={require('../assets/images/opel.png')}
              resizeMode="contain"
            />
          <Text style={styles.subtitle}>
            Opel
          </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.button}
          onPress={() => handleLink('https://www.sgmw.com.cn/baojun')}>
            <Image
              style={styles.image}
              source={require('../assets/images/baojun.png')}
              resizeMode="contain"
            />
          <Text style={styles.subtitle}>
            BaoJun
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
