import {Dimensions} from 'react-native';
import { StyleSheet } from 'react-native';



const { width,height } = Dimensions.get('window');
const heightConteinerList = height *  0.40

const styles = StyleSheet.create({
    container: {
      flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    conteinerList:{
      backgroundColor:'#FFF',
      height:heightConteinerList,
      padding: 5,
    }
  });

export default styles;