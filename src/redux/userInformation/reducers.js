import { MeTypes } from './constants';
const initialState = {
    userInfor: '',
    posts: {},
};
export default function userInforReducer(state = initialState, actions) {
    switch (actions.type) {
        case MeTypes.UPDATE_PROFILE:
            return {
                ...state, // lấy lại tất cả các state cũ
                userInfor: actions.payload.data,
            };
        case MeTypes.UPDATE_POSTUSER:
            return {
                ...state,
                posts: actions.payload.data,
            };
        case MeTypes.UPDATE_COMPARE:
            return {
                ...state,
                posts: actions.payload.data,
            };
        case MeTypes.FORGOT_PASSWORD:
            return {
                ...state,
                payload: actions.payload.data
            }
    }
    return state;
}
