import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
// Componentes básicos do React Native:
// - View: container para outros componentes (como div no HTML)
// - Text: exibe textos
// - Image: exibe imagens
// - ScrollView: permite rolagem do conteúdo
// - StyleSheet: para estilização

import Header from '../components/Header';
// Importa nosso componente de cabeçalho personalizado

const HomeScreen = () => {
  // Componente da tela inicial
  return (
    <ScrollView style={styles.container}>
      {/* ScrollView permite rolar quando o conteúdo é maior que a tela */}
      <Header logo={require('../assets/images/logo.png')} />
      {/* Componente Header com a logo */}
      
      <Image 
        source={require('../assets/images/banner.jpg')} 
        style={styles.banner}
        resizeMode="cover"
        />
        {/* Imagem de banner com ajuste para cobrir o espaço */}
      
      
      <View style={styles.content}>
        {/* Container para o conteúdo textual */}
        <Text style={styles.title}>Bem-vindo à Nossa Marca</Text>
        {/* Texto com estilo de título */}
        <Text style={styles.text}>
          Descubra a excelência e qualidade que oferecemos...
        </Text>
        {/* Texto descritivo */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Objeto de estilos (similar ao CSS)
  container: {
    flex: 1,            // Ocupa todo o espaço disponível
    backgroundColor: '#fff', // Fundo branco
  },
  banner: {
    width: '100%',      // Largura total
    height: 200,        // Altura fixa
  },
  // ... outros estilos
});

export default HomeScreen;