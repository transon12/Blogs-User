import { postsListActionTypes } from './post_contanst';

const initialState = {
    page: [
        {
            sao: '932.5k',
            user: '567',
            img: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-hoat-hinh-buon.jpeg',
            view: '903.2k',
            edit: '32',
            coment: '37k',
            book: '53',
            add: 'theo dõi',
            time: 'Đã đăng vào khoảng 24 giờ trước - 6 phút đọc',
        },
    ],
    postsInfo: {},
};

export default function post_reducers(state = initialState, action) {
    switch (action.type) {
        case postsListActionTypes.POSTS_LIST:
            return {
                ...state,
                title: action.payload,
                content: action.payload,
                content1: action.payload,
                img1: action.payload,
                content2: action.payload,
                img2: action.payload,
                content3: action.payload,
            };
        case postsListActionTypes.POSTS_DETAIL:
            return {
                ...state,
            };
        case postsListActionTypes.FETCH_DATA_DETAIL_SUCCESS:
            console.log(action);
            switch (action.payload.actionType) {
                case postsListActionTypes.POSTS_DETAIL:
                    return {
                        ...state,
                        postsInfo: action.payload.payload.data,
                    };
            }
    }
    return state;
}
