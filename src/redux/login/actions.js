// @flow
import { MeTypes } from './constants';
// common success
export const responseSuccess = (data) => ({
    type: MeTypes.LOGIN_SUCCESS,
    payload: { data },
});
export const responseLogin = (data) => ({
    type: MeTypes.LOGIN_SUCCESS,
    payload: { data },
});
export const responseRequet = (params) => {
    console.log(params);
    return {
        type: MeTypes.LOGIN_REQUET,
        payload: { params },
    };
};
export const responseFeail = (error) => ({
    type: MeTypes.LOGIN_FEAIL,
    payload: { error },
});
