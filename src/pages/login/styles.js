import { StyleSheet } from 'react-native'
import colors from '../../commons/colors'
import {widthScreemPercent,heightScreemPercent} from '../../commons/functions';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.light.principal,
      alignItems: 'center',
      justifyContent: 'center',
    },    
    //Logo animada e nome do app
    containerLogo:{},
    imagemLogo:{},
    //campos de e-mail e senha
    containerFields:{
      width: widthScreemPercent(0.8),
      marginBottom:10,
    },
    fieldsLogin:{
      color:'#F00',
      borderBottomWidth:1,
      borderBottomColor:'#FFF',      
    },
    //Botões de logar e esqueci a senha
    containerFieldsTouch:{
      width: widthScreemPercent(0.8),
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:40,
    },

    btnLogin:{
      backgroundColor:colors.light.secundaria,
      paddingHorizontal:30,
      paddingVertical:5,
      alignItems:'center',
      borderRadius: 5,      
    },
    btnLoginText:{
      color:'#FFF',
      fontWeight:'bold'
    },
    btnForgetPassText:{
      color:'#FFF',
      fontWeight:'bold'
    },

    containerOr:{
      flexDirection:'row',
      alignItems:'center',
      width: widthScreemPercent(0.8)
    },
    lineOr:{
      borderBottomColor:'#fff',
      borderBottomWidth:1,
      width: widthScreemPercent(0.37)
    },
    textOr:{
      color:'#FFF',
      fontWeight:'bold'
    },
    containerBtnSocial:{
      marginTop:5,
    },
    btnSocial:{
      flexDirection:'row',
      width: widthScreemPercent(0.8),
      backgroundColor:colors.light.secundaria,
      paddingHorizontal:30,
      paddingVertical:10,
      alignItems:'center',
      borderRadius: 5,   
      marginBottom: 5,
      justifyContent:'center'
      
    },
    btnSocialText:{
      color:'#FFF',
      fontSize:15,
      fontWeight:'bold',
      marginLeft: 10,
    }
  });

export default styles;