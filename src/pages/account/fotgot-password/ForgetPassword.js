// @flow
import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox, Col, Row, Space } from 'antd';
//actions
import { resetAuth, forgotPassword } from '../../../redux/actions';
import '../fotgot-password/style.scss';
// components

/* bottom link */

const ForgetPassword = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const history = useHistory();

    const [accountForgot, setAccountForgot] = useState();
    const [isDisabled, setIsDisabled] = useState(false);

 

    useEffect(() => {
        if (!accountForgot) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [accountForgot]);

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    const { loading, passwordReset, resetPasswordSuccess, error } = useSelector((state) => ({
        loading: state.Auth.loading,
        user: state.Auth.user,
        error: state.Auth.error,
        passwordReset: state.Auth.passwordReset,
        resetPasswordSuccess: state.Auth.resetPasswordSuccess,
    }));

    /*
     * handle form submission
     */
    const onSubmit = (formData) => {
        dispatch(forgotPassword(formData['username']));
    };

    return (
        <div className="forgot">
            <Row align="middle" justify="center">
                <Col xl={8} className="border-get-code">
                    <Form name="basic" autoComplete="off">
                        <Form.Item style={{ margin: 0 }}>
                            <p className="text-type-email">{t('Please enter your email address.')} </p>
                        </Form.Item>
                        <Form.Item name="username">
                            <Input
                                className="input-forgot"
                                onChange={(e) => setAccountForgot(e.target.value)}
                                placeholder={t('Your email')}
                            />
                        </Form.Item>
                        <Row align="bottom" className="get-code">
                            <Col justify="center" align="middle">
                                <Form.Item>
                                    <Button onClick={() => history.push('/login')} type="ghost" htmlType="submit">
                                        {t('Cancel')}
                                    </Button>
                                </Form.Item>
                            </Col>
                            <Col style={{ marginLeft: 16 }} justify="center" align="middle">
                                <Form.Item>
                                    <Button
                                        onClick={() => history.push('/account/Confirm')}
                                        disabled={isDisabled}
                                        type="primary"
                                        htmlType="submit">
                                        {t('Get Confirmation Code')}
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ForgetPassword;
