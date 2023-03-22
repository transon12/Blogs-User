import { MeTypes } from './constants';
import { responseSuccess } from './actions';
const initialState = {
    userInformation: '',
    unInfo: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case MeTypes.LOGIN_REQUET: {
            return {
                ...state,
            };
        }
        case MeTypes.LOGIN_FEAIL: {
            return {
                ...state,
            };
        }
        case MeTypes.LOGIN_SUCCESS: {
            switch (action.payload.data.type) {
                case MeTypes.LOGIN_REQUET: {
                    return {
                        ...state,
                        userInformation: action.payload.data.payload.data,
                        unInfo: action.payload.data.payload.data,
                    };
                }
            }
        }
    }
    return state;
}
