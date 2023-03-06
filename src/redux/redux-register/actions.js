import { registerActionTypes } from './contanst';
export function registerFacebook(data) {
    return {
        type: registerActionTypes.REGISTER_FACEBOOK,
        payload: data,
    };
}

export function registerGoogle(data) {
    return {
        type: registerActionTypes.REGISTER_GOOGLE,
        payload: data,
    };
}
export function registerbasic(data) {
    return {
        type: registerActionTypes.REGISTER_BASIC,
        payload: data,
    };
}
