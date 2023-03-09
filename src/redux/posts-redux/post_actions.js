import { postsListActionTypes } from './post_contanst';
export function postsList(data) {
    return {
        type: postsListActionTypes.POSTS_LIST,
        payload: data,
    };
}


