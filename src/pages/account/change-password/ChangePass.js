import React from 'react';
import { Form, Input, Button, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import { useHistory } from 'react-router-dom';
import '../change-password/style.scss';

const ChangePass = () => {
    const history = useHistory();
    const { t } = useTranslation();
    return (
        <>
            <div className="changepass">
                <Row align="middle" justify="center">
                    <Col xl={8} xs={18}>
                        <Form name="basic" autoComplete="off">
                            <Form.Item name="username" align="middle" justify="center">
                                <p>{t('User:hoapx@rikkeisoft.com')}</p>
                            </Form.Item>
                            <Form.Item name="oldpass">
                                <Input placeholder={t('Old password')} className="input-changepass" />
                            </Form.Item>
                            <Form.Item name="newpass">
                                <Input placeholder={t('New password')} className="input-changepass" />
                            </Form.Item>
                            <Form.Item name="retypNewpass">
                                <Input placeholder={t('Re-type new password')} className="input-changepass" />
                            </Form.Item>
                            <Row align="bottom" className="button-changepass">
                                <Col style={{ marginRight: 16 }} justify="center" align="middle">
                                    <Form.Item>
                                        <Button onClick={() => history.push('/login')} type="primary" htmlType="submit">
                                            {t('Back to Login')}
                                        </Button>
                                    </Form.Item>
                                </Col>
                                <Col justify="center" align="middle">
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            {t('Change Password')}
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ChangePass;
