import { MeTypes } from './constants';
import axios from 'axios';

// common success
export const responseSuccess = (actionType, data) => {
    return {
        type: MeTypes.RESPONSE_SUCCESS,
        payload: { actionType, data },
    };
};

// common error
export const responseError = (actionType, error) => {
    return {
        type: MeTypes.RESPONSE_ERROR,
        payload: { actionType, error },
    };
};

// action get all post
export const getAllPost = (data) => {
    return {
        type: MeTypes.GET_ALL_POST,
        payload: data,
    };
};

//action reset error post
export const resetErrorPost = (params) => {
    return {
        type: MeTypes.RESET_ERROR,
        payload: { params },
    };
};

//
export const reponseAddlike = (params) => ({
    type: MeTypes.ADD_POSTS,
    payload: { params },
});
