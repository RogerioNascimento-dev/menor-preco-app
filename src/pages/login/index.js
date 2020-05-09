import React from 'react';
import { View,Text,TextInput,Image, Button } from 'react-native';
import styles from './styles';
import { Sae } from 'react-native-textinput-effects';
import { Entypo,MaterialCommunityIcons,AntDesign } from "@expo/vector-icons";
import logo from '../../../assets/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({navigation}) => {  
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
                style={styles.fieldsLogin}
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
          />
            </View>  


          <View style={styles.containerFieldsTouch}>
            <TouchableOpacity >
              <Text style={styles.btnForgetPassText}>Esqueci minha senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnLogin} onPress={()=> (navigation.navigate('Main'))}>
                <Text style={styles.btnLoginText}>Entrar</Text>
            </TouchableOpacity>
          </View>     
          
          <View style={styles.containerOr}>
            <View style={styles.lineOr}></View>
            <Text style={styles.textOr}> Ou </Text>
            <View style={styles.lineOr}></View>
          </View> 
          
          <View style={styles.containerBtnSocial}>
            <TouchableOpacity style={styles.btnSocial}>
              <AntDesign name="facebook-square" size={24} color="#FFF" />
              <Text style={styles.btnSocialText}>Entrar fom facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSocial}>
              <AntDesign name="google" size={24} color="#FFF" />
              <Text  style={styles.btnSocialText}>Entrar com google</Text>
            </TouchableOpacity>
          </View>
        </View>
  );
}



export default Login;