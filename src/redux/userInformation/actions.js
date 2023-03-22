import { MeTypes } from './constants';

export const uploadSuccess = (data) => ({
    type: MeTypes.UPDATE_PROFILE,
    payload: { data },
});

export const PostUser = (data) => ({
    type: MeTypes.UPDATE_POSTUSER,
    payload: { data },
});

export const Compare = (data) => ({
    type: MeTypes.UPDATE_COMPARE,
    payload: { data },
});
