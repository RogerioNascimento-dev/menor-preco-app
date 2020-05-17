import {Alert} from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import { signInSuccess, signFailure, signInRequest } from './actions';

export function* signIn({payload}){
    try{
        const {email, password} = payload;
        const response = yield call(api.post, 'sessions', { email, password });
        const { token, user } = response.data;
        
        yield put(signInSuccess(token,user));        
        api.defaults.headers.Authorization = `Bearer ${token.token}`;
    }catch(err){
        Alert.alert('Oops','Usuário ou senha incorreto, verifique seus dados.')
        yield put(signFailure())        
    }
}

export function* signUp({payload}){    
    const {name,email,password,passwordConfirmation} = payload;    
    try{
        const response = yield call(api.post,'users',{
            name,
            email,
            password,
            password_confirmation: passwordConfirmation
        })
        yield put(signInRequest(email, password));
    }catch(err){  
        console.tron.log(err.status);      
        Alert.alert('Oops','O e-mail informado já está cadastrado em nossa base de dados.')
        yield put(signFailure())  
    }        
}


export function* signInFacebook({payload}){    
    const {name,email,password} = payload;    
    try{
        const response = yield call(api.post,'users/facebook',{
            name,
            email,
            password,            
            logged_facebook: true
        })
        yield put(signInRequest(email, password));
    }catch(err){        
        Alert.alert('Oops','Algo inesperado aconteceu na tentatica de autenticação via Facebook.')
        yield put(signFailure())  
    }        
}

export function setToken({ payload }){    
    if(!payload) return;
    const { token } = payload.auth;
    if(token){        
        api.defaults.headers.Authorization = `Bearer ${token.token}`;
    }
}    
//escutando os types das actions e acionando a função
export default all([    
    takeLatest('@auth/SIGN_IN_REQUEST',signIn),
    takeLatest('@auth/SIGN_IN_FACEBOOK_REQUEST', signInFacebook),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),    
    takeLatest('persist/REHYDRATE',setToken)    
]); 