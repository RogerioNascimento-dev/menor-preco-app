import { StyleSheet } from 'react-native';
import {widthScreemPercent,heightScreemPercent} from '../../commons/functions';



const styles = StyleSheet.create({
    container: {
      flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    conteinerList:{
      backgroundColor:'#FFF',
      height:heightScreemPercent(0.4),
      padding: 5,
    }
  });

export default styles;