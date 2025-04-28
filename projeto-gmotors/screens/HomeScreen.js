import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import {styles} from '../estillo/styles.js';
import Header from '../components/Header';

const HomeScreen = () => {
  
  return (
    <ScrollView style={styles.containerScroll}>
      <Header 
      logo={require('../assets/images/logomarca.png')}
      testo={'General Motors'}
      />
      
      <View style={styles.content}>

      <Text style={styles.title}>
      GM Motors: Inovação e Liderança
      </Text>
      
        <Image style={styles.mainImage} source = {require('../assets/images/oculoshome.jpg')}/>
       
                
        <Text style={styles.text}>
          A General Motors é uma Gigante do setor automobilístico, dona de marcas famosas como Chevrolet e Cadillac, a empresa americana se consolidou no mercado global abrindo montadoras pelo mundo inteiro, para olhar seu sucesso basta olhar para as ruas.
        </Text>
        
        <Text style={styles.subtitle}>
         Um novo mundo
       </Text>
        <Image
        style={styles.mainImage}
        source = {require('../assets/images/carros.jpg')}
        />
        <Text style={styles.text}> 
        A GM tem investido fortemente no futuro da mobilidade sustentável com sua linha de carros elétricos. Modelos como o Chevrolet Bolt e a linha Hummer EV refletem o compromisso da empresa em reduzir as emissões de carbono e promover a eletrificação.
        </Text>
        
      </View>
    </ScrollView>
  );
};

export default HomeScreen;