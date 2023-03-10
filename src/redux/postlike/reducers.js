import { MeTypes } from './constants';
const initialState = {
    lists: [
        {
            id: 1,
            img: 'https://tinhayvip.com/wp-content/uploads/2022/08/top-99-anh-gai-xinh-mac-bikini-mau-trang-15.jpg',
            name: 'Nguyễn Trường An',
            day: '2023/10/03 09:00:00 pm',
            content: 'Bài viết này thật là hay rất ý nghĩa là oki',
            like: 50,
        },
        {
            id: 2,
            img: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg',
            name: 'Nguyễn Thành Chung',
            day: '2023/10/03 09:00:00 am',
            content: 'Bài viết này rất hữu ích cho người dùng',
            like: 70,
        },
        {
            id: 3,
            img: 'https://cdn.24h.com.vn/upload/2-2021/images/2021-05-22/anh-6-1621645023-899-width650height813.jpg',
            name: 'Nguyễn Thành Chung',
            day: '2023/10/03 04:00:00 pm',
            content: 'Bài viết này rất hữu ích cho người dùng',
            like: 10,
        },
        {
            id: 4,
            img: 'https://sohanews.sohacdn.com/160588918557773824/2021/4/9/photo-1-16179284279221192720520.jpg',
            name: 'Nguyễn Thành Chung',
            day: '2023/10/03 02:00:00 pm',
            content: 'Bài viết này rất hữu ích cho người dùng',
            like: 90,
        },
        {
            id: 5,
            img: 'https://s1.media.ngoisao.vn/resize_580/news/2022/02/06/gai-xinh-bikini-1-ngoisaovn-w678-h960.jpg',
            name: 'Nguyễn Thành Chung',
            day: '2023/10/03 05:00:00 pm',
            content: 'Bài viết này rất hữu ích cho người dùng',
            like: 30,
        },
        {
            id: 6,
            img: 'https://tinhayvip.com/wp-content/uploads/2022/12/anh-gai-xinh-mac-lot-khe-lo-ca-cap-dao-lo-ca-diem-g-7.jpg',
            name: 'Nguyễn Thành Chung',
            day: '2023/10/03 12:00:00 pm',
            content: 'Bài viết này rất hữu ích cho người dùng',
            like: 60,
        },
    ],

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
