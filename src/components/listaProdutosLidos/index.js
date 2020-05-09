import React,{useState, useEffect} from 'react';
import { View,Text,ScrollView,FlatList,TouchableOpacity } from 'react-native';

import  styles  from './styles';

const ListaProdutosLidos = () => {

    const dadosLista = [
        {id:1,description:'Feijão Real 1kg',barcode:7898901621089, qtd:5},
        {id:2,description:'Macarrão imperador 5g',barcode:7891152234015, qtd:2},
        {id:3,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},
        {id:4,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},
        {id:5,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},
        {id:6,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},
        {id:7,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},
        {id:8,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},
        {id:9,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},
        {id:10,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},
        {id:11,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},
        {id:12,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},
        {id:13,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},
        {id:14,description:'Milho verde lata  200g', barcode:7896041156010, qtd:1},

    ]

    const [data,setData] = useState(dadosLista);

  return (
    <View style={styles.container}>        
            <FlatList
            style={styles.list}
            data={data}
            keyExtractor={product => `${product.id}`}
            disableVirtualization
            renderItem={({item}) => {
                return(
                    <View style={styles.itemListContent}>
                    <Text style={styles.itemListTitle}>{item.description}</Text>
                    <Text style={styles.itemListTitleRight}>Qtd {item.qtd}</Text>
                    </View>
                )
            }}
            />  

            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnPesquisar} >
                <Text style={styles.textBtnPesquisar}>Pesquisar Preços</Text>
            </TouchableOpacity>   
            </View>                   
    </View>
  )
}

export default ListaProdutosLidos;