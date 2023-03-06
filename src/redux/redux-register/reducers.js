import { registerActionTypes } from './contanst';

const initialState = {
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case registerActionTypes.REGISTER_BASIC:
            return {
                ...state,
                user: action.payload,
            };
        case registerActionTypes.REGISTER_FACEBOOK:
            return {
                ...state,
                user: action.payload,
            };
        case registerActionTypes.REGISTER_GOOGLE:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
