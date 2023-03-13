// @flow
import React, { useEffect, useState } from 'react';
import image from '../../../assets/images/register/Image.png';
import { Link, Route, Redirect, useHistory } from 'react-router-dom';

import '../fotgot-password/style.scss';
import { forgotemail, forgotbasic } from '../../../redux/redux-fotgot-password/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const ForgetPassword = () => {
    const states = useSelector((state) => state.forgotPassword);

    let history = useHistory();
    console.log(states);
    
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        dispatch(forgotemail(values));
        return history.push('/New-Password');
    };
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const [userData, setUserData] = useState(null);
    const handleClick = () => {};
    return (
        <div class="register">
            <div class="register_nav3">
                <div class="register_nav3_icon-alen">
                    <img src="../images/register/icon.png" alt="" />
                    <div class="register_nav3_alen-hepl">
                        <label class="register_nav3_alen">alem</label>
                        <label class="register_nav3_hepl">help</label>
                    </div>
                </div>
                <div class="register_nav3_login-registe">
                    <div class="register_nav3_resetto1">
                        <button class="register_nav3_register">Register</button>
                    </div>
                    <div class="register_nav3_resetto2">
                        <button class="register_nav3_loginpage">Login</button>
                    </div>
                </div>
            </div>
            <div class="register_form_user_image">
                <div class="register_form_user">
                    <h3>Confirm Email</h3>

                    <div class="register_form_input_user">
                        <Form
                            {...layout}
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{
                                maxWidth: 600,
                            }}
                            validateMessages={validateMessages}>
                                <div className='register_form_email'></div>
                            <Form.Item
                                name={['email']}
                                rules={[
                                    {
                                        type: 'email',
                                    },
                                ]}>
                                <Input placeholder="Email" />
                            </Form.Item>
                            <div className='register_form_button'>
                            <Form.Item shouldUpdate>
                                {() => (
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        disabled={
                                            !form.isFieldsTouched(true) ||
                                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                        }>
                                        CONFIRM EMAIL
                                    </Button>
                                )}
                            </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
                <div class="register_form_image">
                    <img src={image} width="100%" alt="" />
                </div>
            </div>
        </div>
    );
};
export default ForgetPassword;
