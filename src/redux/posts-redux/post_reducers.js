import { postsListActionTypes } from './post_contanst';

const initialState = {
    detail:[
        {
            title:"12 lý do khiến MySQL truy vấn chậm - Part 1",
            content:"1. SQL không được đánh index",
            content1:" Nhiều lần, truy vấn chậm của chúng ta là do không có index . Nếu không có index, nó sẽ gây ra quá trình quét toàn bộ bảng.Do đó, bạn nên xem xét khi truy vấn các cột có điều kiện, xây dựng chỉ mục và cố gắng tránh quét toàn bộ bảng.",
            img1:"https://images.viblo.asia/full/5c8b1edc-bff3-4d03-a3f2-3775ce2cd1ab.png",
            content2:"Câu lệnh bắt đầu bằng EXPLAIN trong hình trên là để lấy thông tin về cách MariaDB thực hiện một SELECT, UPDATE hoặc DELETE. Nhìn vào cột type bạn sẽ thấy nó có giá trị là ALL. Có nghĩa là nó đang quét toàn bộ bảng điều này là không nên đối với các bảng lớn. Ngoài ra còn một số type khác bạn có thể xem ở hình sau:",
            img2:"https://images.viblo.asia/full/1167c636-2102-4f29-ac48-5d2e275cffd5.png",
            content3:"bây giời nhìn vào hình trên cột type đã chuyển thành giá trị ref. Để biết giá trị ref có ý nghĩa gì các bạn có thể xem trong phần type mình có chia sẻ ở trên."
        }
    ]
};

export default function post_reducers (state = initialState, action) {
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
    }
    return state;
}
                                                                                                        