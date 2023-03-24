import { MeTypes } from './constants';

const initialState = {
    postList: [],

    posts: {
        content: 'Hỏi cú pháp javascript theo kiểu độc lạ bình dương em đọc không hiểu nên nhờ mọi người',
        icon1: '<ion-icon name="code-outline"></ion-icon>',
        icon2: '<ion-icon name="checkmark-outline"></ion-icon>',
        icon3: '<ion-icon name="eye-outline"></ion-icon>',
        icon4: ' <ion-icon name="chatbubble-ellipses-outline"></ion-icon>',
        name: 'Nguyễn Trường An',
    },

    loading: false,
    error: null,
    showError: false,
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case MeTypes.RESPONSE_SUCCESS: {
            switch (action.payload.actionType) {
                case MeTypes.GET_ALL_POST:
                    return {
                        ...state,
                        loading: false,
                        postList: action.payload.data,
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
        case MeTypes.ADD_POSTS: {
            console.log(action.payload);
            return {
                ...state,
                posts: action.payload.param,
            };
        }
        default:
            return state;
    }
};

export default reducers;
