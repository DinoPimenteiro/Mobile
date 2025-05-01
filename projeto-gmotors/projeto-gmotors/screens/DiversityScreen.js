import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../estillo/styles.js';
import Header from '../components/Header.js';


const DiversityScreen= () => {
  return (
    <ScrollView style={styles.containerScroll}>
      <Header logo={require('../assets/images/logomarca.png')} />

      <View style={styles.content}>
        <Text style={styles.title}> Segurança</Text>

        <Image
          style={styles.mainImage}
          source={require('../assets/images/diversidade.jpg')}
        />

        <Text style={styles.text}>
        Na GM Motors acreditamos que todos temos que ter oportunidades sem sofrer nenhum tipo de preconceito
         e segregação, estamos empenhados em garantir conforto e igualdade para todos.
        </Text>
      </View>
    </ScrollView>
  );
};

export default DiversityScreen;
