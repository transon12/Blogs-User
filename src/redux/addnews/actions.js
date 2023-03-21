
import { MeTypes } from './constants';

export const responseAdd= (params) => ({
    type: MeTypes.ADD_NEWS,
    payload: { params },
});
