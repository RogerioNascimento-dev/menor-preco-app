import {widthScreemPercent} from '../../../commons/functions';
import { StyleSheet } from 'react-native';
import colors from '../../../commons/colors';

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 15
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },

  containerFields:{    
    alignItems:'center',    
  },
  fieldsLogin:{    
    borderBottomWidth:1,
    borderBottomColor: colors.light.principal,    
    width: widthScreemPercent(0.9),       
  },
  inputStyle:{
    color:colors.light.principal,    
  },
  labelStyle:{
    color:'#CCC',
  },
  btnSubmit:{
    alignItems:'center',
    marginTop:10,    
    paddingVertical:5,
    width: widthScreemPercent(0.9),       
    backgroundColor:colors.light.principal,
    elevation: 1,
    borderRadius:5,
  },
  btnSubmitText:{
    color:'#fff',
    fontSize:20,
  }
  });

export default styles;