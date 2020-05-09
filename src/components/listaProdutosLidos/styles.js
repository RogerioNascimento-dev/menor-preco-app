import { StyleSheet, Dimensions } from "react-native";
import colors from '../../commons/colors';


const { width,height } = Dimensions.get('window');
const heightConteinerList = height *  0.32;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#EEE',
        borderRadius:5,
        elevation: 2,
    },
    list:{
        height: heightConteinerList,
    },
    itemListContent:{
        flex:1,
        flexDirection: 'row',        
        justifyContent:'space-between',
        paddingHorizontal: 5,
        borderBottomWidth:  1,
        borderBottomColor:colors.light.principal,
        marginBottom:10,        
        alignItems: 'center'
    },
    itemListTitle:{
        color: colors.light.principal,
        fontSize: 20,        
    },
    itemListTitleRight:{
        color: colors.light.principal,
    },
    btnPesquisar:{
        backgroundColor:colors.light.principal,
        paddingHorizontal:10,
        paddingVertical:5,
        alignItems:'center',
        marginRight: 5,
        
    },
    btnContainer:{
        marginTop:5,
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    textBtnPesquisar:{
        color:'#FFF'
    }
})

export default styles;