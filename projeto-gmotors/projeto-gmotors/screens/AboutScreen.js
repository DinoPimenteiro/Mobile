import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../estillo/styles.js';
import Header from '../components/Header.js';

const AboutScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);


  const images = [
    require('../assets/images/acesso.png'),
    require('../assets/images/biometria.jpg'),
    require('../assets/images/inclusao.jpg'),
    require('../assets/images/diversidade.jpg'),
  ];

  const openImageViewer = (image) => {
    setCurrentImage(image);
    setModalVisible(true);
  };


  const closeImageViewer = () => {
    setModalVisible(false);
    setCurrentImage(null);
  };


  const modalStyles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: '90%',
      height: '70%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
  });

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
        <Text style={styles.text}>Clique para saber mais:</Text>

        <View style={styles.row}>
          <View style={{ alignItems: 'center' }}>
            {/* Ao clicar, abre o modal com a imagem de Acessibilidade */}
            <TouchableOpacity onPress={() => openImageViewer(images[0])}>
              <Image style={styles.image} source={images[0]} />
              <Text style={styles.text}>Acessibilidade</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            {/* Ao clicar, abre o modal com a imagem de Segurança */}
            <TouchableOpacity onPress={() => openImageViewer(images[1])}>
              <Image style={styles.image} source={images[1]} />
              <Text style={styles.text}>Segurança</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={{ alignItems: 'center' }}>
            {/* Ao clicar, abre o modal com a imagem de Inclusão */}
            <TouchableOpacity onPress={() => openImageViewer(images[2])}>
              <Image style={styles.image} source={images[2]} />
              <Text style={styles.text}>Inclusão</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            {/* Ao clicar, abre o modal com a imagem de Diversidade */}
            <TouchableOpacity onPress={() => openImageViewer(images[3])}>
              <Image style={styles.image} source={images[3]} />
              <Text style={styles.text}>Diversidade</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal para exibição da imagem ampliada */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeImageViewer}
      >
        <TouchableWithoutFeedback onPress={closeImageViewer}>
          <View style={modalStyles.modalOverlay}>
            <View style={modalStyles.modalContent}>
              {currentImage && <Image source={currentImage} style={modalStyles.modalImage} />}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
};

export default AboutScreen;