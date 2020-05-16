import React,{useState, useEffect} from 'react';
import { View,Text,FlatList } from 'react-native';

import  styles  from './styles';

const List = ({data,refreshing, onRefreshList}) => {

  return (
    <View style={styles.container}>        
            <FlatList
            style={styles.list}
            data={data}
            keyExtractor={product => `${product.id}`}
            disableVirtualization
            onRefresh={() => onRefreshList()}
            refreshing={refreshing}
            renderItem={({item}) => {
                return(
                    <View style={styles.itemListContent}>
                        <View style={styles.itemListTitleContent}>
                            <Text style={styles.itemListTitle}>{item.description}</Text>
                            <Text style={styles.itemListTitleRight}>{item.quantity} ítens</Text>
                        </View>

                        <View style={styles.itemListSubTitleContent}>
                            <Text style={styles.itemListSubTitle}>Menor preço:</Text>
                            <Text style={styles.itemListSubTitleRight}>R${item.max_price}</Text>
                        </View>

                        <View style={styles.itemListSubTitleContent}>
                            <Text style={styles.itemListSubTitle}>Maior preço:</Text>
                            <Text style={[styles.itemListSubTitleRight,{color:'#F00'}]}>R${item.min_price}</Text>
                        </View>

                    </View>
                )
            }}
            />                               
    </View>
  )
}

export default List;