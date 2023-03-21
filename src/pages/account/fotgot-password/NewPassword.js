// @flow
import React, { useEffect, useState } from 'react';
import image from '../../../assets/images/register/Image.png';
import './newpassword.scss';
import { useSelector } from 'react-redux';

import '../fotgot-password/style.scss';

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

const onFinish = (values) => {
    console.log(values);
};
const ForgotPassword = () => {
    
    const [form] = Form.useForm();
    const states = useSelector((state) => state.forgotPassword);
    const [passwordVisible, setPasswordVisible] = React.useState(false);
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
                    <h3>CONFIRM NEW PASSWORD
                        <br/>
                    {states?.user?.email ? states.user?.email : ''}</h3>
                    <div class="register_form_input_user">
                        <Form
                            {...layout}
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{
                                maxWidth: 600,
                            }}
                            validateMessages={validateMessages}>
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback>
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error('The two passwords that you entered do not match!')
                                            );
                                        },
                                    }),
                                ]}>
                                <Input.Password />
                            </Form.Item>
                        </Form>
                    </div>

                    <div className="register_button_user">
                    <Form.Item shouldUpdate>
                                {() => (
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        disabled={
                                            !form.isFieldsTouched(true) ||
                                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                        }>
                                        FORGOT PASSWORD
                                    </Button>
                                )}
                            </Form.Item>
                            </div>
                </div>
                <div class="register_form_image">
                    <img src={image} width="100%" alt="" />
                </div>
            </div>
        </div>
    );
};
export default ForgotPassword;
