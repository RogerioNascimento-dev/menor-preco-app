import React from 'react';
import { View,Text,TouchableOpacity,Button } from 'react-native';
import styles from './styles';
import ListaPrincipal from '../../components/listPrincipal';



const Main = ({navigation}) => {

  const handleNavegar = () =>{
    alert('executou handleNavegar');
    navigation.navigate('NovaLista')
  } 

  return (
    <View style={styles.container}>    
          <ListaPrincipal />
      </View>
  );
}
export default Main;