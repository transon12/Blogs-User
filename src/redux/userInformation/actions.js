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

export const uploadSuccess = (data) => ({
    type: MeTypes.UPDATE_PROFILE,
    payload: { data },
});

export const PostUser = (data) => ({
    type: MeTypes.UPDATE_POSTUSER,
    payload: { data },
});

export const Compare = (data) => ({
    type: MeTypes.UPDATE_COMPARE,
    payload: { data },
});

export const forgotPassword = (data) => ({
    type: MeTypes.FORGOT_PASSWORD,
    payload: {data}
})