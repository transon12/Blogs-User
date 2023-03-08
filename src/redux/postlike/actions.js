import { MeTypes } from './constants';

// common success
export const responsePostlike = (data) => ({
    type: MeTypes.POST_LIKE,
    payload: { data },
});