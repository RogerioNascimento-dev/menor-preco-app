import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import colors from '../../commons/colors';

const HeaderModalize = ({title}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>{title}</Text>
    </View>
)}

const styles = StyleSheet.create({
    container:{        
        paddingVertical: 2,
        borderBottomWidth: 1,
        borderBottomColor:'#CCC',
    },
    textTitle:{
        fontSize:18,
        textAlign: 'center',
        color:'#CCC',
    }
});

export default HeaderModalize;


