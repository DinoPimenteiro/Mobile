import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../estillo/styles.js';
import Header from '../components/Header.js';


const InclusionScreen= () => {
  return (
    <ScrollView style={styles.containerScroll}>
      <Header logo={require('../assets/images/logomarca.png')} />

      <View style={styles.content}>
        <Text style={styles.title}> Segurança</Text>

        <Image
          style={styles.mainImage}
          source={require('../assets/images/inclusao.jpg')}
        />

        <Text style={styles.text}>
           Na GM Motors acreditamos num nundo que não faz distinção de cor, classe social ou gênero. Acreditamos que todos são iguais e merecem respeito. 

        </Text>
      </View>
    </ScrollView>
  );
};

export default InclusionScreen;
