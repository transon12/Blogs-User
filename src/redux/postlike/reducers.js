import { MeTypes } from './constants';

const initialState = {
    user: {
        id: 1,
        full_avatar_url:
            'https://lms-rikkei-dev.s3.amazonaws.com/materials/1666147614_DyDrRirZQpOPtXfR.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQEO33HSBZRSFOXNE%2F20230323%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230323T034448Z&X-Amz-SignedHeaders=host&X-Amz-Expires=60&X-Amz-Signature=51cadad3fbf9e94153e69c3117156b8b9676c2c5c522c64442013c96a9e3a789',
        name: 'admin',
        created_at: '2023-03-15T08:45:26.000000Z',
        content: '<p>CNTT</p>',
        like: 50,

        loading: false,
        error: null,
        showError: false,
    },

    posts: [
        {
            content: 'Hỏi cú pháp javascript theo kiểu độc lạ bình dương em đọc không hiểu nên nhờ mọi người',
            icon1: '<ion-icon name="code-outline"></ion-icon>',
            icon2: '<ion-icon name="checkmark-outline"></ion-icon>',
            icon3: '<ion-icon name="eye-outline"></ion-icon>',
            icon4: ' <ion-icon name="chatbubble-ellipses-outline"></ion-icon>',
            name: 'Nguyễn Trường An',
        },
        {
            content: 'Hỏi cú pháp javascript theo kiểu độc lạ bình dương em đọc không hiểu nên nhờ mọi người',
            icon1: '<ion-icon name="code-outline"></ion-icon>',
            icon2: '<ion-icon name="checkmark-outline"></ion-icon>',
            icon3: '<ion-icon name="eye-outline"></ion-icon>',
            icon4: ' <ion-icon name="chatbubble-ellipses-outline"></ion-icon>',
            name: 'Nguyễn Trường An',
        },
        {
            content: 'Hỏi cú pháp javascript theo kiểu độc lạ bình dương em đọc không hiểu nên nhờ mọi người',
            icon1: '<ion-icon name="code-outline"></ion-icon>',
            icon2: '<ion-icon name="checkmark-outline"></ion-icon>',
            icon3: '<ion-icon name="eye-outline"></ion-icon>',
            icon4: ' <ion-icon name="chatbubble-ellipses-outline"></ion-icon>',
            name: 'Nguyễn Trường An',
        },
    ],
};

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
        case MeTypes.ADD_POSTS: {
            console.log(action.payload);
            return {
                ...state,
                user: action.payload.param,
            };
        }
        default:
            return state;
    }
};

export default reducers;
