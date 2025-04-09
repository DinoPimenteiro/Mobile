import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import {styles} from '../estillo/styles.js';


const AboutScreen = () => {
  return (
    <ScrollView style={styles.containerScroll}>

      <Image
        source={require('../assets/images/teste.jpeg')}
        style={styles.image}
      
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Sobre Nossa Marca</Text>
        
        <Text style={styles.text}>
        
          Fundada em 1908 por William C. Durant, em Detroit, a GM nasceu da ambição de unir várias montadoras sob um mesmo teto.
          E conseguiu — com o tempo, incorporou marcas lendárias como Buick, Cadillac, Chevrolet e GMC. 
          Durante o século XX, a GM não só cresceu, como dominou. Tornou-se a maior montadora do mundo, símbolo da força
          industrial dos Estados Unidos. Seus carros cruzaram gerações, da sofisticação dos
          Cadillacs ao espírito jovem dos Chevrolets.

        </Text>
        
        <Text style={styles.subtitle}>Nossos Valores</Text>
          <Text style={styles.text}>
            Integridade – Fazer o certo, sempre. A GM valoriza a transparência, a honestidade e a responsabilidade em todas
            as suas ações.  

            Cliente em primeiro lugar – Toda inovação e melhoria têm como foco oferecer a melhor experiência possível ao cliente.

            Excelência – Buscar a perfeição, com foco em qualidade, eficiência e melhoria contínua.

            Inovação – A GM investe fortemente em novas tecnologias, como veículos elétricos e soluções de mobilidade autônoma,
            buscando liderar o futuro da indústria. 

            Inclusão – Promove um ambiente de trabalho diverso, equitativo e respeitoso, onde todos se sintam valorizados.

            Responsabilidade social e ambiental – Comprometida com a sustentabilidade, a GM trabalha para reduzir o impacto
            ambiental de suas operações e produtos, com metas ambiciosas de neutralidade de carbono. 

          </Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;