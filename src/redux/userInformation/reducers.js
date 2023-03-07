import { MeTypes } from './constants';
const initialState = {
    userInfor: '',
    posts:{}
};
export default function userInforReducer(state = initialState, actions) {
    switch (actions.type) {
        case MeTypes.UPDATE_PROFILE:
            return {
                ...state,
                userInfor: actions.payload.data,
            };
        case MeTypes.UPDATE_POSTUSER:
            return{
                ...state,
                posts: actions.payload.data,
            }
    }
    return state;
}
