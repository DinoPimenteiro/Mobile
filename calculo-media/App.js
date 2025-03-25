import React, {useState} from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import {styles} from './estilo/styles.js';

const Aplicativo = () => {
  const [nota1, setnota1] = useState('');
  const [nota2, setnota2] = useState('');
  const [nota3, setnota3] = useState('');
  const [nota4, setnota4] = useState('');
  const [media, setmedia] = useState('');
  const [resul, setresul] = useState('');

  const Media = () => {
    const note1 = parseFloat(nota1);
    const note2 = parseFloat(nota2);
    const note3 = parseFloat(nota3);
    const note4 = parseFloat(nota4);
  
    if (!isNaN(note1) && !isNaN(note2) && !isNaN(note3) && !isNaN(note4)) {
      const mediaCalculada = (note1 + note2 + note3 + note4) / 4;
      setmedia(mediaCalculada.toString());

      if (mediaCalculada >= 6) {
        setresul(`APROVADO PARABÉNS!`);
      } else if (mediaCalculada >= 4 && mediaCalculada < 6) {
        setresul(`RECUPERAÇÃO PARABÉNS!`);
      } else {
        setresul(`REPROVADO PARABÉNS!`);
      }
    } else {
      setresul('NOTA INVÁLIDA!');
      setmedia('ERRO!')
    }
  };

  return(
    <View style={styles.container}>
      <TextInput 
        style = {styles.input}
        placeholder="Digite a sua nota."
        keyboardType="numeric"
        value={nota1}
        onChangeText = {setnota1}
      />
      <TextInput 
        style = {styles.input}
        placeholder="Digite a sua nota."
        keyboardType="numeric"
        value={nota2}
        onChangeText = {setnota2}
      />
      <TextInput 
        style = {styles.input}
        placeholder="Digite a sua nota."
        keyboardType="numeric"
        value={nota3}
        onChangeText = {setnota3}
      />
      <TextInput 
        style = {styles.input}
        placeholder="Digite a sua nota."
        keyboardType="numeric"
        value={nota4}
        onChangeText = {setnota4}
      />


      <TextInput 
        style = {styles.input}
        placeholder="MÉDIA:"
        value={media}
        onChangeText = {setmedia}
        editable={false}
      />
      <Button title="VERIFICAR" onPress={Media}/>

      <Text style = {styles.texto}>
        {resul}
      </Text>
    </View>
  );
};


export default Aplicativo;

  
