import { USER_GET_SUCCESS } from './constants';

const initialState = [];
const users = (state = initialState, action) => {
    switch (action.type) {
        case USER_GET_SUCCESS:
            return [...action, payload];
        default:
            return state;
    }
};

export default users;
