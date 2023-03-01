// @flow
import { AuthActionTypes } from './constants';

import { APICore } from '../../helpers/api/apiCore';

const api = new APICore();

const INIT_STATE = {
    user: api.getLoggedInUser(),
    loading: false,
    accessToken: '',
    details: {},
    projects: {},
};

type AuthAction = { type: string, payload: { actionType?: string, data?: any, error?: string } };
type State = { user?: {} | null, loading?: boolean, +value?: boolean };

const Auth = (state: State = INIT_STATE, action: AuthAction): any => {
    switch (action.type) {
        case AuthActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case AuthActionTypes.LOGIN_USER: {
                    return {
                        ...state,
                        user: action.payload.data,
                        userLoggedIn: true,
                        loading: false,
                    };
                }
                case AuthActionTypes.SIGNUP_USER: {
                    return {
                        ...state,
                        loading: false,
                        userSignUp: true,
                    };
                }
                case AuthActionTypes.LOGOUT_USER: {
                    return {
                        ...state,
                        user: null,
                        loading: false,
                        userLogout: true,
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD: {
                    return {
                        ...state,
                        resetPasswordSuccess: action.payload.data,
                        loading: false,
                        passwordReset: true,
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD_CHANGE: {
                    return {
                        ...state,
                        loading: false,
                        passwordChange: true,
                    };
                }
                case AuthActionTypes.GET_DETAILS: {
                    return {
                        ...state,
                        loading: false,
                        details: action.payload.data,
                    };
                }
                case AuthActionTypes.UPDATE_USER: {
                    return {
                        ...state,
                        loading: false,
                        userUpdate: true,
                    };
                }
                case AuthActionTypes.GET_ALL_PROJECTS: {
                    return {
                        ...state,
                        loading: false,
                        projects: action.payload.data,
                    };
                }
                case AuthActionTypes.UPDATE_TOKEN: {
                    return {
                        ...state,
                        loading: false,
                    };
                }
                default:
                    return { ...state };
            }

        case AuthActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case AuthActionTypes.LOGIN_GOOGLE: {
                    return {
                        ...state,
                        error: action?.payload?.error,
                        userLoggedIn: false,
                        loading: false,
                    };
                }
                case AuthActionTypes.SIGNUP_USER: {
                    return {
                        ...state,
                        registerError: action.payload.error,
                        userSignUp: false,
                        loading: false,
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD: {
                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                        passwordReset: false,
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD_CHANGE: {
                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                        passwordChange: false,
                    };
                }
                case AuthActionTypes.UPDATE_USER: {
                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                        userUpdate: false,
                    };
                }
                case AuthActionTypes.UPDATE_TOKEN: {
                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                    };
                }
                default:
                    return { ...state };
            }

        case AuthActionTypes.LOGIN_USER:
            return { ...state, loading: true, userLoggedIn: false };
        case AuthActionTypes.LOGOUT_USER:
            return { ...state, loading: true, userLogout: false };
        case AuthActionTypes.SIGNUP_USER:
            return { ...state, loading: true, userSignUp: false };
        case AuthActionTypes.FORGOT_PASSWORD:
            return { ...state, loading: true, passwordReset: false };
        case AuthActionTypes.FORGOT_PASSWORD_CHANGE:
            return { ...state, loading: true, passwordChange: false };
        case AuthActionTypes.GET_DETAILS:
            return { ...state, loading: true };
        case AuthActionTypes.UPDATE_USER:
            return { ...state, loading: true, userUpdate: false };
        case AuthActionTypes.GET_ALL_PROJECTS:
            return { ...state, loading: true };
        case AuthActionTypes.UPDATE_TOKEN:
            return { ...state, loading: true };
        case AuthActionTypes.RESET:
            return {
                ...state,
                loading: false,
                error: null,
                userSignUp: false,
                userLoggedIn: false,
                passwordReset: false,
                passwordChange: false,
                resetPasswordSuccess: null,
                userUpdate: false,
            };
        default:
            return { ...state };
    }
};

export default Auth;
