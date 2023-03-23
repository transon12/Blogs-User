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
        case MeTypes.FORGOT_PASSWORD:{
            console.log(actions);
            return {
                    ...state,
                    payload: actions.payload
                }
            }
            // case MeTypes.RESPONSE_SUCCESS:
            // console.log(actions);
            // console.log(actions.payload.actionType);
            // switch (actions.payload.actionType){
            //     case MeTypes.FORGOT_PASSWORD:{
            //         return {
            //             ...state,
            //             payload: actions.payload
            //         }
            //     }
            // }
    }
    return state;
}
