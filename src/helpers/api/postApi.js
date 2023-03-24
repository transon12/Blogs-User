// @flow
import { APICore } from './apiCore';
// import axios from 'axios';

const api = new APICore();

function getMeListApi(params) {
    return api.get('api/me/list', params);
}

export {
    getMeListApi,
   
};
