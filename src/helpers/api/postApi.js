import { APICore } from './apiCore';
const api = new APICore();

function getListPostApi(params) {
    return api.get('/api/student/posts', params);
}

export { getListPostApi };
