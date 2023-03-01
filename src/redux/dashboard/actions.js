// @flow
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

// action get ME list
export const getMeList = (params) => {
    return {
        type: MeTypes.GET_ME_LIST,
        payload: { params },
    }
};

// action update ME
export const updateMe = (params) => {
    return {
        type: MeTypes.UPDATE_ME,
        payload: { params },
    }
};

// action submit ME
export const submitMe = (params) => {
    return {
        type: MeTypes.SUBMIT_ME,
        payload: { params },
    }
};

// action approve ME
export const approveMe = (params) => {
    return {
        type: MeTypes.APPROVE_ME,
        payload: { params },
    }
};

// action feedback ME
export const feedbackMe = (params) => {
    return {
        type: MeTypes.FEEDBACK_ME,
        payload: { params },
    }
};

// action approve multiple ME
export const approveMultipleMe = (params) => {
    return {
        type: MeTypes.APPROVE_MULTIPLE_ME,
        payload: { params },
    }
};

// action feedback multiple ME
export const feedbackMultipleMe = (params) => {
    return {
        type: MeTypes.FEEDBACK_MULTIPLE_ME,
        payload: { params },
    }
};

//action reset update success message
export const resetSuccessUpdateMe = (params) => {
    return {
        type: MeTypes.RESET_SUCCESS_UPDATE,
        payload: { params },
    };
};

//action reset submit success message
export const resetSuccessSubmitMe = (params) => {
    return {
        type: MeTypes.RESET_SUCCESS_SUBMIT,
        payload: { params },
    };
};

//action reset approve success message
export const resetSuccessApproveMe = (params) => {
    return {
        type: MeTypes.RESET_SUCCESS_APPROVE,
        payload: { params },
    };
};

//action reset feedback success message
export const resetSuccessFeedbackMe = (params) => {
    return {
        type: MeTypes.RESET_SUCCESS_FEEDBACK,
        payload: { params },
    };
};

//action reset approve multiple success message
export const resetSuccessApproveMultipleMe = (params) => {
    return {
        type: MeTypes.RESET_SUCCESS_APPROVE_MULTIPLE,
        payload: { params },
    };
};

//action reset feedback multiple success message
export const resetSuccessFeedbackMultipleMe = (params) => {
    return {
        type: MeTypes.RESET_SUCCESS_FEEDBACK_MULTIPLE,
        payload: { params },
    };
};

//action reset error message
export const resetErrorMe = (params) => {
    return {
        type: MeTypes.RESET_ERROR,
        payload: { params },
    };
};
