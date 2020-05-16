import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ProductList from '../../components/productList';
import styles from './styles';

const NovaLista = () => {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  //Lendo a permissão do usuário para acessar a camera
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

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

  const dadosLista = [
    {id:22, description:'Feijão',brand:'Carioca',amount:'1kg', barcode:7898901621089, quantity:5},
    {id:23, description:'Café',brand:'Marata',amount:'500g', barcode:2514414, quantity:5},
    
]

  return (
      <View style={styles.container}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject,styles.camera]}
      />     
      {scanned && (
        <Button title={'Escanear outro produto'} onPress={() => setScanned(false)} />
      )}      
      </View>
  );
}

export default NovaLista;