import React,{useState,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { View,Text,Image, ActivityIndicator,Alert } from 'react-native';
import styles from './styles';
import { Sae } from 'react-native-textinput-effects';
import { Entypo,MaterialCommunityIcons,AntDesign } from "@expo/vector-icons";
import logo from '../../../assets/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Facebook from 'expo-facebook';

import {signInRequest,signInFacebookRequest, signUpRequest} from '../../store/modules/auth/actions';


const Login = ({navigation}) => { 

  const [email, setEmail]                                   = useState('');
  const [name, setName]                                     = useState('');
  const [password, setPassword]                             = useState('');
  const [passwordConfirmation, setPasswordConfirmation]     = useState('');  
  const [isRegister, setIsRegister]                         = useState(false);


  const passwordRef             =  useRef();
  const nameRef                 =  useRef();
  const emailRef                =  useRef();
  const passwordConfirmationRef =  useRef();
  const loading                 = useSelector(state => state.auth.loading);
  const dispatch                = useDispatch();
 

  function handleSubmit(){    
    
  if(isRegister){    
    if(name && email && password && passwordConfirmation){
      if(password === passwordConfirmation){  
        dispatch(signUpRequest(name,email,password, passwordConfirmation));
      }else{
        Alert.alert('Oops', 'As senhas informadas estão diferentes');
      }
    }else{
      Alert.alert('Oops', 'Todos os campos são obrigatórios.');
    }  
  }else{
    dispatch(signInRequest(email, password));
  }
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
        console.tron.log(userFacebook);   
        const nomeFacebook      = `${userFacebook.first_name} ${userFacebook.last_name}`;
        const emailFacebook     = userFacebook.email 
        const passwordFacebook  = userFacebook.id
        dispatch(signInFacebookRequest(nomeFacebook,emailFacebook,passwordFacebook))
        
      } else {        
        Alert.alert('Oops','Login Cancelado pelo usuário.')
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
            {isRegister && 
                <Sae                
                label={'Nome'}
                iconClass={AntDesign}
                iconName={'user'}
                iconColor={'#FFF'}
                inputPadding={16}
                labelHeight={24}   
                labelStyle={{color:'#FFF'}}                 
                borderHeight={1}                                    
                autoCapitalize={'none'}
                autoCorrect={false}     
                keyboardType="email-address"           
                style={styles.fieldsLogin}
                value={name}
                onChangeText={setName}
                ref={nameRef}
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current.focus()}
              />
            }          
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
                ref={emailRef}
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
          />


          {isRegister &&
            <Sae
            label={'Confirmar Senha'}
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
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
            ref={passwordConfirmationRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
      />
          }

            </View>

          <View style={styles.containerFieldsTouch}>
          {!isRegister ?
            <TouchableOpacity >
              <Text style={styles.btnForgetPassText}>Esqueci minha senha?</Text>
            </TouchableOpacity>:<View />}

            <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
            {loading ? <ActivityIndicator size={20} color="#FFF" />:
            <Text style={styles.btnLoginText}>{!isRegister ?'Entrar':'Cadastrar'}</Text>}
            </TouchableOpacity>
          </View>     
          
          <View style={styles.containerOr}>
            <View style={styles.lineOr}></View>
            <Text style={styles.textOr}> Ou </Text>
            <View style={styles.lineOr}></View>
          </View> 
          
          
          <View style={styles.containerBtnSocial}>
            {!isRegister && 
            <TouchableOpacity style={styles.btnSocial} onPress={fbLogin}>
              <AntDesign name="facebook-square" size={24} color="#FFF" />
              <Text style={styles.btnSocialText}>Entrar fom facebook</Text>
            </TouchableOpacity> }
          

            <TouchableOpacity style={styles.btnSocial} onPress={() => setIsRegister(!isRegister)}>              
  <Text  style={styles.btnSocialText}>{isRegister ? 'Já possuo Conta!': 'Cadastre-se!'}</Text>
            </TouchableOpacity>
          </View>          
        </View>
  );
}



export default Login;