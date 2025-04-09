import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import {styles} from '../estillo/styles.js';


const ServiceScreen = () => {
  return (
    <ScrollView style={styles.containerScroll}>
      
      <View style={styles.content}>
        <Text style={styles.title}>Sobre Nossa Marca</Text>
        
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

export default ServiceScreen;