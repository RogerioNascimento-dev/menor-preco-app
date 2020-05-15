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
        api.defaults.headers.Authorization = `Baerer ${token}`;
    }catch(err){
        Alert.alert('Oops','Usuário ou senha incorreto, verifique seus dados.')
        yield put(signFailure())        
    }
}
    
//escutando os types das actions e acionando a função
export default all([    
    takeLatest('@auth/SIGN_IN_REQUEST',signIn),    
]); 