import React,{useState,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { View,Text,TextInput,Image, Button } from 'react-native';
import styles from './styles';
import { Sae } from 'react-native-textinput-effects';
import { Entypo,MaterialCommunityIcons,AntDesign } from "@expo/vector-icons";
import logo from '../../../assets/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Facebook from 'expo-facebook';

import {signInRequest} from '../../store/modules/auth/actions';


const Login = ({navigation}) => {  

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef =  useRef();
  const loading = useSelector(state => state.auth.loading);
 

  function handleSubmit(){        
    dispatch(signInRequest(email, password));
  }

  
  async function fbLogin() {
    try {
      await Facebook.initializeAsync('337610447219827');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile','email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=first_name,last_name,email`);
        const userFacebook = await response.json()    
        console.log(userFacebook);     
        navigation.navigate('Main')
      } else {
        // type === 'cancel'
        alert('Login Cancelado pelo usuário')
      }
    } catch ({ message }) {
      alert(`Algo inesperado aconteceu ao tentar efetuar este login com facebook: ${message}`);
    }
  }

  return (
        <View style={styles.container}>                                
          <Image          
            style={styles.imagemLogo}
            source={logo} />    
            <View style={styles.containerFields}>            
            <Sae                
                label={'E-mail'}
                iconClass={Entypo}
                iconName={'mail'}
                iconColor={'#FFF'}
                inputPadding={16}
                labelHeight={24}   
                labelStyle={{color:'#FFF'}}                 
                borderHeight={1}                                    
                autoCapitalize={'none'}
                autoCorrect={false}     
                keyboardType="email-address"           
                style={styles.fieldsLogin}
                value={email}
                onChangeText={setEmail}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
          />
          <Sae
                label={'Senha'}
                iconClass={MaterialCommunityIcons}
                iconName={'textbox-password'}
                iconColor={'#FFF'}
                inputPadding={16}
                labelHeight={24}    
                labelStyle={{color:'#FFF'}}                 
                borderHeight={1}                    
                secureTextEntry
                autoCapitalize={'none'}
                autoCorrect={false}                
                style={styles.fieldsLogin}
                value={password}
                onChangeText={setPassword}
                ref={passwordRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
          />
            </View>  


          <View style={styles.containerFieldsTouch}>
            <TouchableOpacity >
              <Text style={styles.btnForgetPassText}>Esqueci minha senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
            <Text style={styles.btnLoginText}>{loading ? 'Carregando...': 'Entrar'}</Text>
            </TouchableOpacity>
          </View>     
          
          <View style={styles.containerOr}>
            <View style={styles.lineOr}></View>
            <Text style={styles.textOr}> Ou </Text>
            <View style={styles.lineOr}></View>
          </View> 
          
          <View style={styles.containerBtnSocial}>
            <TouchableOpacity style={styles.btnSocial} onPress={fbLogin}>
              <AntDesign name="facebook-square" size={24} color="#FFF" />
              <Text style={styles.btnSocialText}>Entrar fom facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSocial}>              
              <Text  style={styles.btnSocialText}>Cadastre-se!</Text>
            </TouchableOpacity>
          </View>

          
        </View>
  );
}



export default Login;