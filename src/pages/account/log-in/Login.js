import './style.scss';
import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import image from '../../../assets/images/login/Image.png';
import image1 from '../../../assets/images/login/Vector.png';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

function Login() {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const [username, setUserName] = useState();
    const [useremail, setUserEmail] = useState();
    const [profile, setProfile] = useState(null);
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

    const pass = (googleData) => {
        console.log(googleData);
        setUserName(googleData.profileOnj.name);
    };

    const fail = (result) => {
        console.log(result.error);
    };

    const responseFacebook = (response) => {
        console.log(response);
        setProfile(response.data)
    };
    const componentClicked = (result) => {
        console.log(result.error);
    };

    const onFinish = (event) => {};
    return (
        <>
            <div className="login-form">
                <div className="narbar">
                    <div className="icon-alen">
                        <img src={image1} alt="" />
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
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}>
                                <Form.Item
                                    name="username"
                                    className="form-chu1"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Username!',
                                        },
                                    ]}>
                                    <Input
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        placeholder="Username"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}>
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div className="google-facebook">
                                <div className="google">
                                    <GoogleLogin className='googlelogin-fomr'
                                        clientId="766994831553-8caj8iuej577hkfsnj642s5hkvg10h29.apps.googleusercontent.com"
                                        buttonText="Google"
                                        onSuccess={pass}
                                        onFailure={fail}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                    ,
                                </div>
                                <div className="facebook">
                                    <FacebookLogin
                                        appId="741537744233850"
                                        autoLoad={true}
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                        cssClass="my-facebook-button-class"
                                        icon ="fa-facebook"
                                    />
                                    ,
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
