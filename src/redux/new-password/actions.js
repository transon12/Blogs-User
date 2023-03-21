import { forgotPasswordlActionTypes } from './contanst';
export function forgotemail(data) {
    return {
        type: forgotPasswordlActionTypes.FORGOT_PASSWORD,
        payload: data,
    };
}
export function forgotbasic(data) {
    return {
        type: forgotPasswordlActionTypes.FORGOT_BASIC,
        payload: data,
    };
}
