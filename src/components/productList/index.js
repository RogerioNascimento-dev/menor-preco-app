import React,{useState, useEffect} from 'react';
import { View,Text,FlatList,TouchableOpacity } from 'react-native';

import  styles  from './styles'; 
const ProductList = ({data,refreshing,onRefreshList}) => {    
  return (
    <View style={styles.container}>        
            <FlatList
            refreshing={refreshing}
            onRefresh={()=>onRefreshList()}
            style={styles.list}
            data={data}
            keyExtractor={product => `${product.id}`}
            disableVirtualization
            renderItem={({item}) => {
                return(
                    <View style={styles.itemListContent}>
                    <View style={styles.itemListTitleContent}>
                        <Text style={styles.itemListTitle}>{item.description} {item.brand} {item.amount}</Text>                        
                        {item.quantity && 
                          <Text style={styles.itemListTitleRight}>Qtd {item.quantity}</Text>
                        }
                    </View>

                    <View style={styles.itemListSubTitleContent}>
                      <Text style={styles.itemListSubTitle}>Código de barras: {item.barcode}</Text>                     
                    </View>           

                </View>


                )
            }}
            />                             
    </View>
  )
}

export default ProductList;