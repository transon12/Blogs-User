
import { MeTypes } from './constants';

export const responseAdd= (data) => ({
    type: MeTypes.ADD_NEWS,
    payload: data,
});

export const postContent = (data) => ({
    type: MeTypes.POST_CONTENT,
    payload: data,
})
