// @flow
import { combineReducers } from 'redux';

import Auth from './auth/reducers';
import Layout from './layout/reducers';
import Dashboard from './dashboard/reducers';
import postLike from './postlike/reducers';
export default combineReducers({
    Auth,
    Layout,
    Dashboard,
    postLike,
});
