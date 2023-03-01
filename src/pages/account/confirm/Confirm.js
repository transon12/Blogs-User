// @flow
import React from 'react';
import { useTranslation } from 'react-i18next';
import {  useHistory } from 'react-router-dom';
import {  Button, } from 'antd';

import { Link } from 'react-router-dom';
import '../confirm/style.scss';
// components
import AccountLayout from '../AccountLayout';

import mailSent from '../../../assets/images/mail_sent.svg';

const Confirm = () => {
    const { t } = useTranslation();
    const history = useHistory();
    return (
        <div className="confirm">
            <AccountLayout>
                <div className="text-center m-auto">
                    <img src={mailSent} alt="mail sent" height="64" />
                    <h4 className="text-dark-50 text-center mt-4 fw-bold">{t('Please check your email')}</h4>
                    <p className="text-muted mb-4">
                        {t(
                            'A email has been send to youremail@rikkeisoft.com . Please check for an email from company and click on the included link to reset your password.'
                        )}
                    </p>
                    <p className="text-center">
                        <Link className="btn btn-primary" to="/login">
                            {t('Back to Login')}
                        </Link>
                    </p>
                    <Button onClick={() => history.push('/account/ChangePass')} type="primary" htmlType="submit">
                        {t('Changepass')}
                    </Button>
                </div>
            </AccountLayout>
        </div>
    );
};

export default Confirm;
