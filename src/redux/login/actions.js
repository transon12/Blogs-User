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
})