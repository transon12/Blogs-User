import './style.scss';
import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import image from '../../../assets/images/login/Image.png';

function Login() {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const data = [
        {
            id: 1,
            name: 'nguyen truong an',
            password: '123456',
        },
        {
            id: 2,
            name: 'dang tan dung',
            password: '123456',
        },
    ];
    const onFinish = (event) => {
        console.log(event);
        let danhap = event.name;
        let danhapmk = event.password;
        let datalist = data.find((e) => {
            return e.name === danhap && e.password === danhapmk;
        });
        if (datalist) {
            return alert('dang nhap thang cong');
        }
    };
    return (
        <>
            <div className="login-form">
                <div className="narbar">
                    <div className="icon-alen">
                        <img src="./Vector.png" alt="" />
                        <div className="alen-hepl">
                            <label className="alen">alem</label>
                            <label className="hepl">help</label>
                        </div>
                    </div>
                    <div className="login-registe">
                        <div className="resetto1">
                            <button className="register">
                                <ion-icon name="person-outline" />
                                Register
                            </button>
                        </div>
                        <div className="resetto2">
                            <button className="loginpage">Login</button>
                        </div>
                    </div>
                </div>
                <div className="form-tong">
                    <div className="wew-login">
                        <div className="from-nho1">
                            <div className="we-mid">
                                <p className="missed-you">We've Missed You!</p>
                                <p className="more-than">
                                    More than 150 questions are waiting for your wise suggestions
                                </p>
                            </div>
                            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                                <Form.Item
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}>
                                    <Input
                                        name="username"
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        placeholder="Username"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}>
                                    <Input
                                        name="password"
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item shouldUpdate>
                                    {() => (
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            disabled={
                                                !form.isFieldsTouched(true) ||
                                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                            }>
                                            Log in
                                        </Button>
                                    )}
                                </Form.Item>
                            </Form>
                            <div className="google-facebook">
                                <div className="google">
                                    <button className="button-google">
                                        <ion-icon className="logo-google" name="logo-google" />
                                        Google
                                    </button>
                                </div>
                                <div className="facebook">
                                    <button className="button-facebook">
                                        Facebook
                                        <ion-icon className="logo-facebook" name="logo-facebook" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="imagee-img">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
