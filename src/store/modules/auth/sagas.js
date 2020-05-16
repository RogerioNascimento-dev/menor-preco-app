import {Alert} from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import { signInSuccess, signFailure } from './actions';

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

export function setToken({ payload }){
    console.tron.log('Executou o settoken', payload)
    if(!payload) return;
    const { token } = payload.auth;
    if(token){        
        api.defaults.headers.Authorization = `Bearer ${token.token}`;
    }
}
    
//escutando os types das actions e acionando a função
export default all([    
    takeLatest('@auth/SIGN_IN_REQUEST',signIn),
    takeLatest('persist/REHYDRATE',setToken)    
]); 