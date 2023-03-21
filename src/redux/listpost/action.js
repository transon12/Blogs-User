import { MeTypes } from './constants';

// common success
export const responseSuccess = (actionType, data) => ({
    type: MeTypes.RESPONSE_SUCCESS,
    payload: { actionType, data },
});

// common error
export const responseError = (actionType, error) => ({
    type: MeTypes.RESPONSE_ERROR,
    payload: { actionType, error },
});

// action get all post
export const getAllPost = (data) => ({
    type: MeTypes.GET_ALL_POST,
    payload: { data },
});

//action reset error post
export const resetErrorPost = (params) => {
    return {
        type: MeTypes.RESET_ERROR,
        payload: { params },
    };
};
