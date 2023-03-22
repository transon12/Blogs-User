
import { MeTypes } from './constants';
import { instapi } from './store';
const initialState = {
    category: '',
    title: '',
    titleSlug:'',
    content: '',
    img:'',
};
export default function addNews(state = initialState, action) {
    switch (action.type) {
        case MeTypes.ADD_NEWS: {
            // console.log('ADD Thành công', action.payload);
            return {
                ...state,
                category: action.payload.category,
                titleSlug: action.payload.titleSlug,
                title: action.payload.title,
                content: action.payload.content,
                img: action.payload.img
            };
        }
        // case MeTypes.POST_CONTENT:{
        //     console.log("postContent---->", action);
        //     return {
        //         ...state,
        //         category: action.payload.category,
        //         titleSlug: action.payload.titleSlug,
        //         title: action.payload.title,
        //         content: action.payload.content,
        //         img: action.payload.img
        //     }
        // }
    }
    return state;
}
