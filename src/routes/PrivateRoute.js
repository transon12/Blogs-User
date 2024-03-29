import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { APICore } from '../helpers/api/apiCore';

/**
 * Private Route forces the authorization before the route can be accessed
 * @param {*} param0
 * @returns
 *
 */

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    const api = new APICore();

    const isAuthenticated = localStorage.getItem('datauser');
    return (
        <Route
            {...rest}
            render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)}
        />
    );

    // return (
    // <Route
    //     {...rest}
    //     render={(props) => {
    //         if (api.isUserAuthenticated() === false) {
    //             // not logged in so redirect to login page with the return url
    //             return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
    //         }

    //         const loggedInUser = api.getLoggedInUser();

    //         // check if route is restricted by role
    //         if (roles && roles.indexOf(loggedInUser.role) === -1) {
    //             // role not authorised so redirect to home page
    //             return <Redirect to={{ pathname: '/dashboard' }} />;
    //         }
    //         // authorised so return component
    //         return <Component {...props} />;
    //     }}
    // />
    // );
};

export default PrivateRoute;
