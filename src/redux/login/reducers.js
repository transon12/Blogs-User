import { MeTypes } from './constants';
const initialState = {
    userInformation: '',
};
export default function reducers(state = initialState, action) {
    switch (action.type) {
        case MeTypes.LOGIN_SUCCESS: {
            console.log('LOGIN REDUCER OKE');
            return {
                ...state,
                userInformation: action.payload,
            };
        }
        case MeTypes.LOGIN_SUCCESS: {
            console.log('LOGIN REDUCER OKE');
            return {
                ...state,
                userInformation: action.payload,
            };
        }
    }
    return state;
}
