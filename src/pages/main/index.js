import React from 'react';
import { View,Text,TouchableOpacity,Button } from 'react-native';

 import styles from './styles';



const Main = ({navigation}) => {

  const handleNavegar = () =>{
    alert('executou handleNavegar');
    navigation.navigate('NovaLista')
  } 

  return (
    <View style={styles.container}>    
          <Text>Estou na página principal da aplicação lala</Text>
          <TouchableOpacity onPress={()=> handleNavegar()}>
              <Text>CRIAR LISTA</Text>
            </TouchableOpacity>
      </View>
  );
}
export default Main;