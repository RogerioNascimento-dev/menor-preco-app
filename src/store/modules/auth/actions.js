export function signInRequest(email, password){
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload:{ email, password }
    };
}

export function signInFacebookRequest(name,email,password,passwordConfirmation){
    return {
        type: '@auth/SIGN_IN_FACEBOOK_REQUEST',
        payload: {name, email, password} 
    };
}

export function signUpRequest(name,email,password, passwordConfirmation){
    return{
        type: '@auth/SIGN_UP_REQUEST',
        payload: {name,email,password, passwordConfirmation}
    }
}

export function signOut(){
    return {
        type: '@auth/SIGN_OUT_REQUEST'
    }
}

export function signInSuccess(token, user){     
    return {
        type:'@auth/SIGN_IN_SUCCESS',
        payload: { token, user},
    };
}

export function signFailure(){    
    return {
        type: '@auth/SIGN_IN_FAILURE'
    };
}