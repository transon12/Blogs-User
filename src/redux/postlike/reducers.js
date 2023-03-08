import { MeTypes } from './constants';
const initialState = {
    lists:[
        {
            img: 'https://tinhayvip.com/wp-content/uploads/2022/08/top-99-anh-gai-xinh-mac-bikini-mau-trang-15.jpg',
            name: 'Nguyễn Trường An',
            day: 'thg 2 22, 4:28 CH - 3 phút đọc',
            content: 'Bài viết này thật là hay rất ý nghĩa là oki',
        },
        {
            img: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg',
            name: 'Nguyễn Thành Chung',
            day: 'thg 2 22, 4:28 CH - 3 phút đọc',
            content: 'Bài viết này rất hữu ích cho người dùng',
        },
        {
            img: 'https://cdn.24h.com.vn/upload/2-2021/images/2021-05-22/anh-6-1621645023-899-width650height813.jpg',
            name: 'Nguyễn Thành Chung',
            day: 'thg 2 22, 4:28 CH - 3 phút đọc',
            content: 'Bài viết này rất hữu ích cho người dùng',
        },
        {
            img: 'https://sohanews.sohacdn.com/160588918557773824/2021/4/9/photo-1-16179284279221192720520.jpg',
            name: 'Nguyễn Thành Chung',
            day: 'thg 2 22, 4:28 CH - 3 phút đọc',
            content: 'Bài viết này rất hữu ích cho người dùng',
        },
        {
            img: 'https://s1.media.ngoisao.vn/resize_580/news/2022/02/06/gai-xinh-bikini-1-ngoisaovn-w678-h960.jpg',
            name: 'Nguyễn Thành Chung',
            day: 'thg 2 22, 4:28 CH - 3 phút đọc',
            content: 'Bài viết này rất hữu ích cho người dùng',
        },
        {
            img: 'https://tinhayvip.com/wp-content/uploads/2022/12/anh-gai-xinh-mac-lot-khe-lo-ca-cap-dao-lo-ca-diem-g-7.jpg',
            name: 'Nguyễn Thành Chung',
            day: 'thg 2 22, 4:28 CH - 3 phút đọc',
            content: 'Bài viết này rất hữu ích cho người dùng',
        },
    ],

    posts:[
        {
            content: 'Hỏi cú pháp javascript theo kiểu độc lạ bình dương em đọc không hiểu nên nhờ mọi người',
            icon1: '<ion-icon name="code-outline"></ion-icon>',
            icon2: '<ion-icon name="checkmark-outline"></ion-icon>',
            icon3: '<ion-icon name="eye-outline"></ion-icon>',
            icon4: ' <ion-icon name="chatbubble-ellipses-outline"></ion-icon>',
            name: 'Nguyễn Trường An'

        },
        {
            content: 'Hỏi cú pháp javascript theo kiểu độc lạ bình dương em đọc không hiểu nên nhờ mọi người',
            icon1: '<ion-icon name="code-outline"></ion-icon>',
            icon2: '<ion-icon name="checkmark-outline"></ion-icon>',
            icon3: '<ion-icon name="eye-outline"></ion-icon>',
            icon4: ' <ion-icon name="chatbubble-ellipses-outline"></ion-icon>',
            name: 'Nguyễn Trường An'

        },
        {
            content: 'Hỏi cú pháp javascript theo kiểu độc lạ bình dương em đọc không hiểu nên nhờ mọi người',
            icon1: '<ion-icon name="code-outline"></ion-icon>',
            icon2: '<ion-icon name="checkmark-outline"></ion-icon>',
            icon3: '<ion-icon name="eye-outline"></ion-icon>',
            icon4: ' <ion-icon name="chatbubble-ellipses-outline"></ion-icon>',
            name: 'Nguyễn Trường An'

        }
    ]

};
export default function postLike(state = initialState, action) {
    switch (action.type) {
        case MeTypes.POST_LIKE: {
            console.log(' POSTLIKE REDUCER OKE');
            return {
                ...state,
                img: action.payload,
                name: action.payload,
                day: action.payload,
                content: action.payload,
            };
        }
    }
    return state;
}
