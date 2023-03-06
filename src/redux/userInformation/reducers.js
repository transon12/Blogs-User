import { MeTypes } from './constants';
const initialState = {
    userInfor: '',
};
export default function userInforReducer(state = initialState, actions) {
    switch (actions.type) {
        case MeTypes.UPDATE_PROFILE:
            return {
                ...state,
                userInfor: actions.payload.data,
            };
    }
    return state;
}
