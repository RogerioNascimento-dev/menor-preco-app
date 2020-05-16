import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './styles';

const NovaLista = ({navigation}) => {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  
  //Lendo a permissão do usuário para acessar a camera
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  alert('ESTOU AQUI NOVA LISTA');
  //executa função se conseguir ler um código
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Código de barras tipo ${type} número ${data} escanieado!`);
  };

  //informa que a permissão é necessária
  if (hasPermission === null) {
    return <Text>Solicitando permissão da câmera...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Permissão negada.</Text>;
  }  
  return (
      
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject,styles.camera]}
      >     
      {scanned && (
        <Button title={'Escanear outro produto'} onPress={() => setScanned(false)} />
      )}  
      
      <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
      </BarCodeScanner>
  );
}

export default NovaLista;