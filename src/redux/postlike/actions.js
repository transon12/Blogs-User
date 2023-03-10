import { MeTypes } from './constants';

// common success
export const responsePostlike = (param) => ({
    type: MeTypes.POST_LIKE,
    payload: { param },
});