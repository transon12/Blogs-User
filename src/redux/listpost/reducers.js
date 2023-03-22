import { MeTypes } from './constants';

const initialState = [
    {
        loading: false,
        error: null,
        showError: false,
    },
];

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case MeTypes.RESPONSE_SUCCESS: {
            switch (action.payload.actionType) {
                case MeTypes.GET_ALL_POST:
                    return {
                        ...state,
                        loading: false,
                        posts: action.payload.data.data.listPosts,
                    };
                default:
                    return state;
            }
        }
        case MeTypes.RESPONSE_ERROR: {
            switch (action.payload.actionType) {
                case MeTypes.GET_ALL_POST:
                    return {
                        ...state,
                        error: action.payload.error,
                        showError: true,
                        loading: false,
                    };
                default:
                    return state;
            }
        }
        case MeTypes.GET_ALL_POST: {
            return {
                ...state,
                loading: true,
            };
        }
        case MeTypes.RESET_ERROR: {
            return {
                ...state,
                error: null,
                showError: false,
            };
        }
        default:
            return state;
    }
};

export default reducers;
