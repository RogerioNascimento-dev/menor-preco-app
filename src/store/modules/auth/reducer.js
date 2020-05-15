
import produce from 'immer';

const INITIAL_STATE = {
    token: null,
    signed: false,
    loading: false
};

export default function auth(state = INITIAL_STATE, action){
    switch(action.type){

        case '@auth/SIGN_IN_REQUEST':
                return produce(state, draft =>{
                    draft.loading = true
        })

        case '@auth/SIGN_IN_SUCCESS':                   
            return produce(state, draft => {
                draft.token = action.payload.token.token;
                draft.signed = true;     
                draft.loading = false;           
        })

        case '@auth/SIGN_IN_FAILURE':
                return produce(state, draft =>{                    
                    draft.loading = false;   
        })

        case '@auth/SIGN_OUT_REQUEST':
            return produce(state, draft =>{
                draft.signed = false;
                draft.token = null;
                draft.loading = false;   
        })       

        

        default:
            return state;
    }
}