import { forgotEmailActionTypes } from './contanst';
export function forgotemail(data) {
    return {
        type: forgotEmailActionTypes.FORGOT_EMAIL,
        payload: data,
    };
}
export function forgotbasic(data) {
    return {
        type: forgotEmailActionTypes.REGISTER_BASIC,
        payload: data,
    };
}
