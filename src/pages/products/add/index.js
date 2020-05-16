import React,{useState, useEffect,useRef} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './styles';
import { Modalize } from 'react-native-modalize';
import HeaderModalize from '../../../components/headerModalize';
import {MaterialCommunityIcons } from "@expo/vector-icons";
import { Sae } from 'react-native-textinput-effects';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../../services/api';


const AddProduct = ({navigation}) => {

  const [hasPermission, setHasPermission]   = useState(null);
  const [scanned, setScanned]               = useState(false);
  const [barcodeScanned,setBarcodeScanned]  = useState('');
  const [description,setDescription]        = useState('');
  const [brand,setBrand]                    = useState('');
  const [amount,setAmount]                  = useState('');
  
  
  const modalizeRef       = useRef(null);
  const barcodeScannedRef = useRef();
  const descriptionRef    = useRef();
  const brandRef          = useRef();
  const amountRef         = useRef();


  function openModal(){
    modalizeRef.current?.open();
  }


  function closeModal(){
    modalizeRef.current?.close();
  }
  
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
    setBarcodeScanned(data)
    openModal()    
  };

  function handdleCloseModal(){
    setScanned(false);
    setDescription('');
    setAmount('');
    setBrand('');
    setBarcodeScanned('');
  }

  async function handleSubmit(){
    try{
      const response = await api.post('products',{
        barcode: barcodeScanned,
        description,
        brand,
        amount
      });
      
      handdleCloseModal();
      closeModal();
      alert('produto cadastrado com sucesso!');
    }catch(err){
      alert('algo inesperado aconteceu.');
    }
  }

  //informa que a permissão é necessária
  if (hasPermission === null) {
    return <Text>Solicitando permissão da câmera...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Permissão negada.</Text>;
  }  
  
  return (      
    <>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject,styles.camera]}
      /> 
      <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
      <View style={styles.layerBottom} />      


      <Modalize
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        onClosed={() => handdleCloseModal()}
        snapPoint={420}
        HeaderComponent={
          <HeaderModalize title="Dados do produto" />
        }   
        withHandle={false}        
        ref={modalizeRef}
        keyboardAvoidingBehavior="height"
      >
  
  <View style={styles.containerFields}>            
          <Sae                
              label={'Código de barras'}
              iconClass={MaterialCommunityIcons}                
              iconName={'barcode-scan'}
              iconColor={'#CCC'}
              inputPadding={16}
              labelHeight={24}   
              labelStyle={styles.labelStyle}                                   
              borderHeight={1}                                    
              autoCapitalize={'none'}
              autoCorrect={false}     
              keyboardType="numeric"           
              style={styles.fieldsLogin}
              inputStyle={styles.inputStyle}
              value={barcodeScanned}
              onChangeText={setBarcodeScanned}
              returnKeyType="next"
              editable={false}
              onSubmitEditing={() => descriptionRef.current.focus()}
          />          
          <Sae
            label={'Descrição'}
            iconClass={MaterialCommunityIcons}
            iconName={'tag-text-outline'}
            iconColor={'#CCC'}
            inputPadding={16}
            labelHeight={24}    
            labelStyle={styles.labelStyle}                   
            borderHeight={1}   
            autoCapitalize={'words'}
            autoCorrect={true}                 
            style={styles.fieldsLogin}
            inputStyle={styles.inputStyle}
            value={description}                
            onChangeText={setDescription}
            ref={descriptionRef}
            returnKeyType="next"
            onSubmitEditing={() => brandRef.current.focus()}
        />

        <Sae
            label={'Marca'}
            iconClass={MaterialCommunityIcons}
            iconName={'tag-text-outline'}
            iconColor={'#CCC'}
            inputPadding={16}
            labelHeight={24}    
            labelStyle={styles.labelStyle}                   
            borderHeight={1}   
            autoCapitalize={'words'}
            autoCorrect={true}                
            style={styles.fieldsLogin}
            inputStyle={styles.inputStyle}
            value={brand}
            onChangeText={setBrand}
            ref={brandRef}
            returnKeyType="next"
            onSubmitEditing={() => amountRef.current.focus()}
        />  

        <Sae
            label={'Quantidade por embalagem'}
            iconClass={MaterialCommunityIcons}
            iconName={'tag-text-outline'}
            iconColor={'#CCC'}
            inputPadding={16}
            labelHeight={24}    
            labelStyle={styles.labelStyle}                   
            borderHeight={1}   
            autoCapitalize={'words'}
            autoCorrect={true}                
            style={styles.fieldsLogin}
            inputStyle={styles.inputStyle}
            value={amount}
            onChangeText={setAmount}
            ref={amountRef}
            returnKeyType="next"
            onSubmitEditing={() => handleSubmit()}
        />  
          <TouchableOpacity style={styles.btnSubmit} onPress={() => handleSubmit()}>
            <Text style={styles.btnSubmitText}>Cadastrar</Text>
          </TouchableOpacity>
    </View>
  </Modalize>
  </>
  );
}

export default AddProduct;