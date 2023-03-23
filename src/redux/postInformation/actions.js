import * as constants from '../postInformation/constants';

export const act_get_user = () => {
    return {
        type: constants.USER_GET,
    };
};

export const act_post_user =(user)=>{
    return {
        type: constants.USER_POST,
        payload: user
    }
}

export const act_success = (data, actionType)=>{
    return {
        type: actionType,
        payload: data
    }
}