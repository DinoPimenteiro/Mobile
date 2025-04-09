import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import {styles} from '../estillo/styles.js';


const HomeScreen = () => {
  return (
    <ScrollView style={styles.containerScroll}>
      
      <View style={styles.content}>
        <Text style={styles.title}>Sobre Nossa Marca</Text>
        
        <Text style={styles.text}>
          TESTES TESET TESTESTASDASDSA TESTAMENTO
          FALTA O HEADER
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

export default HomeScreen;