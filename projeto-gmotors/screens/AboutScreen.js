import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../estillo/styles.js';
import Header from '../components/Header.js';


const AboutScreen = () => {
  return (
    <ScrollView style={styles.containerScroll}>
      <Header logo={require('../assets/images/logomarca.png')} />

      <View style={styles.content}>
        <Text style={styles.title}>Sobre Nossa Marca</Text>

        <Image
          style={styles.mainImage}
          source={require('../assets/images/teste.jpeg')}
        />

        <Text style={styles.text}>
          Fundada em 1908 por William C. Durant, em Detroit, a GM nasceu da ambição de
          unir várias montadoras sob um mesmo teto. Com o tempo, incorporou marcas lendárias
          como Buick, Cadillac, Chevrolet e GMC. Durante o século XX, a GM não só cresceu, como 
          dominou. Tornou-se a maior montadora do mundo, símbolo da força industrial dos Estados Unidos. 
          Seus carros cruzaram gerações, da sofisticação dos Cadillacs ao espírito jovem dos Chevrolets.
        </Text>

        <Text style={styles.subtitle}>Nossos Valores</Text>

        <View style={styles.row}>
          <View style={{ alignItems: 'center' }}>
            <Image style={styles.image} source={require('../assets/images/acesso.png')} />
            <Text style={styles.text}>Acessibilidade</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Image style={styles.image} source={require('../assets/images/biometria.jpg')} />
            <Text style={styles.text}>Segurança</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={{ alignItems: 'center' }}>
            <Image style={styles.image} source={require('../assets/images/inclusao.jpg')} />
            <Text style={styles.text}>Inclusão</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Image style={styles.image} source={require('../assets/images/diversidade.jpg')} />
            <Text style={styles.text}>Diversidade</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
