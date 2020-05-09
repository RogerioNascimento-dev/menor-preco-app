import React from 'react';
import { View,Text,StyleSheet, Button } from 'react-native';
import styles from './styles';

const Login = ({navigation}) => {
  return (
        <View style={styles.container}>          
            <Text>Pagina de Login</Text>
            <Button onPress={()=> (navigation.navigate('Main'))} title="Navegar até a main" />             
        </View>
  );
}



export default Login;