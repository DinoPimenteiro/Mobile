import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { styles } from '../estillo/styles.js'

const Header = ({ logo, testo }) => {
  // Componente funcional que recebe 'logo' como prop
  return (
    <View style={styles.header}>
      {/* Container do cabeçalho */}
      <Image 
        source={logo} 
        style={styles.logo} 
        resizeMode="contain"
        />
        
      <Text style={styles.titleHeader}>
        {testo}
      </Text>
     {/* Imagem que mantém proporção dentro do espaço */}

    </View>
  );
};

export default Header;