import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import {styles} from './estilo/styles';

const App = () => {
  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');
  const [resul, setresul] = useState('');

  operSoma = () => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (!isNaN(numero1) && !isNaN(numero2)){
      setresul (numero1 + numero2);
    } else {
      setresul ("Número Inválido!");
    }
  }
  
  operMulti = () => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (!isNaN(numero1) && !isNaN(numero2)){
      setresul (numero1 * numero2);
    } else {
      setresul("Número Inválido!");
    }
  }
  
  operSubtrai = () => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (!isNaN(numero1) && !isNaN(numero2)){
      setresul (numero1 - numero2);
    } else {
      setresul ("Número Inválido!");
    }
  }
  
  operDivide = () => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (!isNaN(numero1) && !isNaN(numero2)){
      setresul (numero1/numero2);
    } else {
      setresul ("Número Inválido!")
    }
  }

 return(
    <View style={styles.container}>
      <TextInput 
        style = {styles.input}
        placeholder="Digite um número."
        keyboardType="numeric"
        value={num1}
        onChangeText = {setnum1}
      />
      <TextInput 
        style = {styles.input}
        placeholder="Digite a sua nota."
        keyboardType="numeric"
        value={num2}
        onChangeText = {setnum2}
      />
     
      <View style = {styles.containerButao}>
        <Button title="+" onPress={operSoma}/>

        <Button title="-" onPress={operSubtrai}/>

        <Button title="x" onPress={operMulti}/>
    
      <Button title="/" onPress={operDivide}/>
       </View>

      <TextInput 
        style = {styles.input}
        placeholder="Resultado"
        value={resul}
        editable={false}
      />

      </View>
  );
};


export default App;
  