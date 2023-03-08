import { forgotEmailActionTypes } from './contanst';

const initialState = {
    user: null,
};

export default function forgotPassword(state = initialState, action) {
    switch (action.type) {
        case forgotEmailActionTypes.FORGOT_EMAIL:
            return {
                ...state,
                user: action.payload,
            };
        case forgotEmailActionTypes.HIDE_RIGHT_SIDEBAR:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
