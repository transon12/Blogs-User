import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import { ROLES } from '../constants/me';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/account/log-in/Login'));
const Logout = React.lazy(() => import('../pages/account/Logout'));
const ForgetPassword = React.lazy(() => import('../pages/account/fotgot-password/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/account/confirm/Confirm'));
const ChangePass = React.lazy(() => import('../pages/account/change-password/ChangePass'));
const Information = React.lazy(() => import('../pages/account/information/Information'));
const Index = React.lazy(() => import('../pages/dashboard/Dashboard.js'))
const IndexUser = React.lazy(()=> import('../pages/dashboard/DashboardUser'))
//Dashboard
// const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />,
    route: PrivateRoute,
};


// dashboards
const dashboardRoutes = [
    // {
    //     path: '/dashboard',
    //     name: 'Dashboard',
    //     component: Dashboard,
    //     // route: PrivateRoute,
    //     route: Route,
    //     roles: [ROLES.DLEAD]
    // },
    {
        path: '/account',
        name: 'Acount',
        component: Information,
        route: PrivateRoute,
        roles: [ROLES.MEMBER, ROLES.DLEAD]
    },
    {
        path: '/index',
        name: 'Index',
        component: Index,
        route: Route,
        roles: [ROLES.DLEAD]
    },
    {
        path: '/homepage',
        name: 'Homepage',
        component: IndexUser,
        route: Route,
        roles: [ROLES.DLEAD]
    },
    {
        path: '/yourquestion',
        name: 'Homepage',
        component: IndexUser,
        route: Route,
        roles: [ROLES.DLEAD]
    },
    {
        path: '/youranswer',
        name: 'Homepage',
        component: IndexUser,
        route: Route,
        roles: [ROLES.DLEAD]
    },

];

const otherPublicRoutes = [
    // {
    //     path: '/error-404',
    //     name: 'Error - 404',
    //     component: ErrorPageNotFound,
    //     route: Route,
    // },
    // {
    //     path: '/error-500',
    //     name: 'Error - 500',
    //     component: ServerError,
    //     route: Route,
    // },
    // {
    //     path: '/account/confirm',
    //     name: 'Confirm',
    //     component: Confirm,
    //     route: Route,
    // },
];

// flatten the list of all nested routes
const flattenRoutes = (routes) => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach((item) => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};
// auth
const authRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        route: Route,
    },
    {
        path: '/account/logout',
        name: 'Logout',
        component: Logout,
        route: Route,
    },
    {
        path: '/account/forget-password',
        name: 'Forget Password',
        component: ForgetPassword,
        route: Route,
    },
    {
        path: '/account/confirm',
        name: 'confirm',
        component: Confirm,
        route: Route,
    },
    {
        path: '/account/changepass',
        name: 'changepass',
        component: ChangePass,
        route: Route,
    },
    {
        path: '/account/information',
        name: 'information',
        component: Information,
        route: Route,
    },
];

// All routes
const authProtectedRoutes = [rootRoute, ...dashboardRoutes];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);

export { publicRoutes, authProtectedRoutes, authProtectedFlattenRoutes, publicProtectedFlattenRoutes };
