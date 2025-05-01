import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../estillo/styles.js';
import Header from '../components/Header.js';


const AcessibilityScreen= () => {
  return (
    <ScrollView style={styles.containerScroll}>
      <Header logo={require('../assets/images/logomarca.png')} />

      <View style={styles.content}>
        <Text style={styles.title}> Acessibilidade </Text>

        <Image
          style={styles.mainImage}
          source={require('../assets/images/acesso.png')}
        />

        <Text style={styles.text}>
         Na GM Motors nossos serviços estão a disposição de todos e de fácil acesso para os
          clientes, uma empresa consolidade preza pela ua imagem. 
        </Text>
        <TouchableOpacity style={styles.button} onPress={'./AboutScreen.js'}>
        
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AcessibilityScreen;
