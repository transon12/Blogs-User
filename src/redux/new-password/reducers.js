import { forgotPasswordlActionTypes } from './contanst';

const initialState = {
    user: null,
};

export default function newPassword(state = initialState, action) {
    switch (action.type) {
        case forgotPasswordlActionTypes.FORGOT_PASSWORD:
            return {
                ...state,
                user: action.payload,
            };
        case forgotPasswordlActionTypes.HIDE_RIGHT_SIDEBAR:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
