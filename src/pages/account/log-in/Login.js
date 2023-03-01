import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Col, Row } from 'antd';
//actions
import { resetAuth, loginUser } from '../../../redux/actions';
import { useQuery } from '../../../hooks';
import './style.scss';
import LoginButton from '../login-google/LoginButton';
import Lottie from 'react-lottie';
import wellcomJson from './../../../assets/animation/welcome.json';

const Login = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const history = useHistory();
    const query = useQuery();
    const next = query.get('next');

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: wellcomJson,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    const { loading, userLoggedIn, user, error } = useSelector((state) => ({
        loading: state.Auth.loading,
        user: state.Auth.user,
        error: state.Auth.error,
        userLoggedIn: state.Auth.userLoggedIn,
    }));

    /*
    handle form submission
    */
    const onFinish = (formData) => {
        dispatch(loginUser(formData['username'], formData['password']));
    };

    const onFinishFailed = (errorInfo) => {};

    return (
        <div className="container">
            <div className="logIn">
                {userLoggedIn || user ? <Redirect to={next ? next : '/me-list'}></Redirect> : null}
                <Row style={{ height: '100%' }}>
                    <Col xl={16} xs={0} justify="center" align="middle" className="welcome">
                        <div>
                            <Lottie width={'100%'} options={defaultOptions} />
                            {/* <p className="text__40B_linear_gradient_welcome">{t('Welcome back!')}</p> */}
                            {/*  <p className="title-description">
                                {t('You can sign in to access with your existing account')}
                            </p> */}
                        </div>
                    </Col>
                    <Col xl={8} xs={24} justify="center" align="middle" className="log-in">
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            style={{ width: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Form.Item>
                                    <p className="text__40B_linear_gradient">{t('Sign In')}</p>
                                </Form.Item>
                            </div>

                            <div className="button-signin-with-google">
                                <LoginButton />
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Login;
