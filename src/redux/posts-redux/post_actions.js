import { postsListActionTypes } from './post_contanst';

export function postsList(data) {
    return {
        type: postsListActionTypes.POSTS_LIST,
        payload: data,
    };
}

export function fetchDataSuccess(data) {
    return {
        type: postsListActionTypes.FETCH_DATA_DETAIL_SUCCESS,
        payload: data,
    };
}
export function fetchData (params) {
    return {
        type: postsListActionTypes.POSTS_DETAIL,
        payload: { params },
    };
}
export function fetchDataError(error) {
    return {
        type: postsListActionTypes.FETCH_DATA_DETAIL_ERROR,
        payload: error,
    };
}
