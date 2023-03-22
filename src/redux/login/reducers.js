import { MeTypes } from './constants';
const initialState = {
    userInformation: '',
    unInfo: {},
};
export default function reducers(state = initialState, action) {
    switch (action.type) {
        case MeTypes.LOGIN_SUCCESS: {
            console.log('LOGIN REDUCER OKE', action);

            return {
                ...state,
                userInformation: action.payload,
                unInfo: action.payload,
            };
        }
    }
    return state;
}
