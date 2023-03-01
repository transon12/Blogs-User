import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { loginGoogle } from '../../../redux/actions';
import './logingoogle.scss';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { messaging } from './../../../firebase';
import { notification } from 'antd';
import { useSelector } from 'react-redux';
import { resetAuth } from '../../../redux/actions';
function LoginHooks() {
    const { error } = useSelector((state) => state.Auth);
    const toastError = (message) => {
        notification.error({
            message: 'Login Failed',
            description: message ? message : 'Login Failed!',
            placement: 'topRight',
            onClose: () => dispatch(resetAuth()),
        });
    };
    useEffect(() => {
        if (error != null && error != undefined) {
            toastError(error);
        }
    }, [error]);
    const clientId = `${process.env.REACT_APP_CLIEND_ID_KEY}`;
    messaging
        .getToken({
            vapidKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
        })
        .then((currentToken) => {
            if (currentToken) {
                setTokenFirebase(currentToken);
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
    const [tokenFirebase, setTokenFirebase] = useState();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const onSuccess = (res) => {
        dispatch(loginGoogle({ accessToken: res.accessToken, firebaseToken: tokenFirebase }));
    };
    const onFailure = (res) => {
        toastError();
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
    });

    const [disabled, setDisabled] = useState(false);

    return (
        <button
            onClick={() => {
                setDisabled(true);
                signIn();
            }}
            className="button button_signin"
            disabled={disabled}
            >
            <GooglePlusOutlined className="icon" style={{ color: '#08c' }} />
            <span className="buttonText">{t('Sign in with Google')}</span>
        </button>
    );
}

export default LoginHooks;
