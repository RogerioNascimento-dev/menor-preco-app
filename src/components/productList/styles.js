import { StyleSheet, Dimensions } from "react-native";
import colors from '../../commons/colors'; 


const { width,height } = Dimensions.get('window');
const heightConteinerList = height *  0.32;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFF',        
    },    
    list:{
        backgroundColor:'#FFF',        
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
    itemListTitle:{
        color: colors.light.principal,
        fontSize: 20,        
    },
    itemListTitleRight:{
        color: colors.light.principal,
    },
    itemListSubTitleContent:{
        flexDirection:'row',
        justifyContent: 'flex-start',        
        alignItems: 'center',    
    },
    itemListSubTitle:{
        marginLeft: 5,
        fontSize: 16,
        color: '#343F4B',        
    },
    itemListSubTitleRight:{
        fontSize: 16,
        color: '#4AB400',
    }
    
})

export default styles;