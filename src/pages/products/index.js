import React,{useEffect,useState,useRef} from 'react';
import { View,Text, Button,StyleSheet,ScrollView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import api from '../../services/api';
import styles from './styles';

import cores from '../../commons/colors';
import ProductList from '../../components/productList';
import ButtonsCard from '../../components/buttonsCard';


const Products = ({navigation}) => { 

  const [products,setProducts] = useState([]);
  const [isFetching,setIsFetching] = useState(false);  
 
  async function loadProducts(){
    try{
      const response = await api.get('products');
      setProducts(response.data);      
    }catch(err){
      console.tron.log(err);
    }
  } 
  
  useEffect(()=>{ 
    loadProducts();    
  },[]) 

  function handdleAddProduct(){
    navigation.navigate('AddProduct');
  }
 return (
   <>
   <View style={styles.containerButtonsTop}>      
    <ButtonsCard iconName='plus' onPress={handdleAddProduct}   iconColor={cores.light.principal} iconSize={25} text="Novo Produto" />
    <ButtonsCard iconName='plus' iconColor={cores.light.principal} iconSize={25}  text="Cadastrar preço"/>    
  </View>
  <ProductList refreshing={isFetching} onRefreshList={loadProducts} data={products} /> 
  </>
  
)};

export default Products;