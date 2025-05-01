import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../estillo/styles.js';
import Header from '../components/Header.js';


const SecurityScreen= () => {
  return (
    <ScrollView style={styles.containerScroll}>
      <Header logo={require('../assets/images/logomarca.png')} />

      <View style={styles.content}>
        <Text style={styles.title}> Segurança</Text>

        <Image
          style={styles.mainImage}
          source={require('../assets/images/biometria.jpg')}
        />

        <Text style={styles.text}>
         A segurança na GM Motors é um dos pilares de prioridade da empresa, principalmente em relação
          as diretrizes do cliente, acreditamos que um produto seguro é benéfico tanto para o comprador como para o vendedor.
        </Text>
      </View>
    </ScrollView>
  );
};

export default SecurityScreen;
