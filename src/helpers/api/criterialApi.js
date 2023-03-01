// @flow
import { APICore, setAuthorization } from './apiCore';

const api = new APICore();

function getCriterial(params) {
    const baseUrl = '/api/criteria';
    return api.get(`${baseUrl}`, params);
}

function deleteCriterial(params) {
    const baseUrl = `/api/criteria/`;
    return api.delete(`${baseUrl}` + params.id, params);
}

function updateCriterial(params) {
    const baseUrl = '/api/criteria/';
    return api.update(`${baseUrl}` + params.id, params);
}

function addCriterial(params) {
    const baseUrl = '/api/criteria';
    return api.create(`${baseUrl}`, params);
}

export { getCriterial, updateCriterial, deleteCriterial, addCriterial };
