// @flow
import { combineReducers } from 'redux';

import Auth from './auth/reducers';
import Layout from './layout/reducers';
import Dashboard from './dashboard/reducers';
import reducers from './redux-register/reducers';
import forgotPassword from './redux-fotgot-password/reducers';
export default combineReducers({
    Auth,
    Layout,
    Dashboard,
    reducers,
    forgotPassword,
});
