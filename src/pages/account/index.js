import React from 'react';
import { View,Text,Button } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signOut}  from '../../../src/store/modules/auth/actions';

import styles from './styles';

const Account = ({navigation}) => { 
  const dispatch  = useDispatch();
  const { profile } = useSelector(state => state.user)
  console.tron.log(profile)

  const handleSignOut = () => {
    dispatch(signOut())    
  }
  return (
  <View style={styles.container}>
      <Text>{profile.name}</Text>    
      <Text>{profile.email}</Text> 
      <Button title="Sair" onPress={handleSignOut} />  
  </View>
)};

export default Account;