import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import {styles} from '../estillo/styles.js';


const ContactScreen = () => {
  return (
      
      <View style={styles.content}>
        <Text style={styles.title}>Informações de Marcas Associadas </Text>
        
        <Text style={styles.text}>
          Lojas: Chevrolet
          Serviço: ACDelco

        </Text>
      </View>

  );
};

export default ContactScreen;