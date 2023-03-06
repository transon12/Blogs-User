import { MeTypes } from './constants';
export const uploadSuccess = (data) => ({
    type: MeTypes.UPDATE_PROFILE,
    payload: { data },
});
