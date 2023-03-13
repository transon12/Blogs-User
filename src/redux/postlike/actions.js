import { MeTypes } from './constants';

// common success
export const responsePostlike = (param) => ({
    type: MeTypes.POST_LIKE,
    payload: { param },
});
export const reponseAddlike = (param) => ({
    type: MeTypes.ADD_POSTS,
    payload: { param },
});
