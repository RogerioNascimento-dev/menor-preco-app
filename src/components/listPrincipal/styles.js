import { StyleSheet, Dimensions } from "react-native";
import colors from '../../commons/colors';
import {widthScreemPercent,heightScreemPercent} from '../../commons/functions';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:widthScreemPercent(1),
    },
    list:{
        height: heightScreemPercent(0.30),
    },
    itemListContent:{
        flex:1,
        flexDirection: 'column',        
        justifyContent:'center',
        paddingHorizontal: 10,
        paddingVertical:10,
        borderBottomWidth:  1,
        borderBottomColor:colors.light.principal,
        marginBottom:10,                
    },
    itemListTitleContent:{
        flex:1,
        flexDirection: 'row',        
        justifyContent: 'space-between',                      
    },    
    itemListTitle:{
        fontSize: 20,
        color: colors.light.principal,
    },
    itemListTitleRight:{
        fontSize: 13,
        color: colors.light.principal,        
    },
    itemListSubTitleContent:{
        flexDirection:'row',
        justifyContent: 'space-between', 
    },
    itemListSubTitle:{
        fontSize: 16,
        color: '#343F4B',
    },
    itemListSubTitleRight:{
        fontSize: 16,
        color: '#4AB400',
    }
})

export default styles;