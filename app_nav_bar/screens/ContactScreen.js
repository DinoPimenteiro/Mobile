import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
// Linking: para abrir URLs externas
// TouchableOpacity: botão que diminui opacidade quando pressionado
import { Ionicons } from '@expo/vector-icons'; // Ícones
import Header from '../components/Header';

const ContactScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:contato@marca.com.br'); // Abre cliente de email
  };

  return (
    <View style={styles.container}>
      <Header logo={require('../assets/images/logo.png')} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Entre em Contato</Text>
        
        <TouchableOpacity 
          style={styles.contactItem} 
          onPress={handleEmailPress}   
        >
        {/* Botão clicável */}
          <Ionicons name="mail" size={24} color="#6200ee" />
          <Text style={styles.contactText}>contato@marca.com.br</Text>
        </TouchableOpacity>
        
        {/* ... outros botões de contato */}
        
        <View style={styles.socialMedia}>
          {/* Container para ícones sociais */}
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-facebook" size={32} color="#3b5998" />
          </TouchableOpacity>
          {/* ... outros ícones */}
        </View>
      </View>
    </View>
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
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  socialIcon: {
    marginHorizontal: 15,
  },
});


export default ContactScreen;