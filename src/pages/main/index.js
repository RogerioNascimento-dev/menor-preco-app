import React,{useState,useEffect} from 'react';
import { View,Text } from 'react-native';
import styles from './styles';
import List from '../../components/list';
import api from '../../services/api';



const Main = ({navigation}) => {

  const [lists,setLists] = useState([]);
  const [isFetching,setIsFetching] = useState(false);

  async function loadLists(){
    try{
        const response = await api.get('lists');
        setLists(response.data)
    }catch(ex){
      console.tron.log(ex);
    }
  }

  useEffect(() =>{
    loadLists();
  },[])


  function handdleRefresh(){
    loadLists();
  }

  const handleNavegar = () =>{
    alert('executou handleNavegar');
    navigation.navigate('NovaLista')
  } 

  return (
    <View style={styles.container}>    
          <List data={lists} refreshing={isFetching} onRefreshList={handdleRefresh} />
      </View>
  );
}
export default Main;