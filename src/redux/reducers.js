// @flow
import { combineReducers } from 'redux';

import Auth from './auth/reducers';
import Layout from './layout/reducers';
import Dashboard from './dashboard/reducers';
import userInforReducer from './userInformation/reducers';
import Login from './login/reducers';
export default combineReducers({
    Auth,
    Layout,
    Dashboard,
    userInforReducer,
    Login,
});
