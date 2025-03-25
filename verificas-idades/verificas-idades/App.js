import React, {useState} from 'react'; // o UseState repassa as informações pro back
import { View, TextInput, Button } from 'react-native';
import {styles} from './CSS/styles.js';


const App = () => {
  const [idade, setidade] = useState(''); // O set serve para o construtor interpretar a variável
  const [resul, setresul] = useState('');

  const Verifica = () =>{
    const idade1 = parseInt(idade);

    if (!isNaN(idade) && idade >=18){
      setresul((`Você possui ${idade1} anos, logo é maior de idade!`).toString());
    } else if (!isNaN(idade) && idade < 18){
      setresul((`Com ${idade1} anos você é menor de idade`).toString());
    } else {
      setresul(('IDADE INVÁLIDA!').toString());
    }
  };

  return(
    <View style={styles.container}>
      <TextInput 
        style = {styles.input}
        placeholder="Digite a sua idade."
        keyboardType="numeric"
        value={idade}
        onChangeText = {setidade}
      />
      <TextInput 
        style = {styles.input}
        placeholder="AGUARDANDO..."
        value={resul}
        onChangeText = {setresul}
        editable={false}
      />

      <Button title="VERIFICAR" onPress={Verifica}/>
      </View>
  );
};


export default App;



