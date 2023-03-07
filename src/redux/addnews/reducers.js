
import { MeTypes } from './constants';
import { instapi } from './store';
const initialState = {
    category: '',
    title: '',
    content: '',
};
export default function addNews(state = initialState, action) {
    switch (action.type) {
        case MeTypes.ADD_NEWS: {
            console.log('ADD Thành công');
            return {
                ...state,
                category: action.payload,
                title: action.payload,
                content: action.payload,
            };
        }
    }
    return state;
}
