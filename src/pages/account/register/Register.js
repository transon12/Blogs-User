import { Button, Cascader, Checkbox, Form, Input, Select } from 'antd';
import { useState } from 'react';
import './register.scss';
import img_2 from '../../../assets/images/register/Image (1).png';
import logo from '../../../assets/images/register/icon.png';
import * as yup from 'yup';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { registerFacebook, registerGoogle, registerbasic } from '../../../redux/redux-register/actions';
import { useDispatch, useSelector } from 'react-redux';
// import responsiveObserve from 'antd/lib/_util/responsiveObserve';

const { Option } = Select;
const residences = [
    {
        value: '',
        label: 'day',
        children: [
            {
                value: 'month',
                label: 'month',
                children: [
                    {
                        value: 'Year',
                        label: 'year',
                    },
                ],
            },
        ],
    },
    {
        value: '09',
        label: '09',
        children: [
            {
                value: '03',
                label: '03',
                children: [
                    {
                        value: '2002',
                        label: '2002',
                    },
                ],
            },
        ],
    },
];
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const App = () => {
    const { user } = useSelector((state) =>state.reducers);
    console.log(user);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        dispatch(registerbasic(values));
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}>
                <Option value="9">0</Option>
                <Option value="10">+84</Option>
            </Select>
        </Form.Item>
    );
    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select
                style={{
                    width: 70,
                }}>
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

    const [userData, setUserData] = useState(null);

    const responseFacebook = (response) => {
        dispatch(registerFacebook(response));
        console.log(response);
        // setUserData(response);
    };

    const [userDataGoogle, setUserDataGoogle] = useState(null);

    const responseGoogle = (response) => {
        console.log(response);
        setUserDataGoogle(response.profileObj);
    };

    const schema = yup.object().shape({
        phoneNumber: yup
            .string()
            .required('Số điện thoại là bắt buộc')
            .matches(/^[0-9]+$/, 'Số điện thoại chỉ chứa các ký tự số')
            .min(10, 'Số điện thoại phải có ít nhất 10 số')
            .max(10, 'Số điện thoại không được vượt quá 10 số'),
    });
    schema
        .validate({ phoneNumber: '0123456789' })
        .then(() => {
            console.log('Số điện thoại hợp lệ');
        })
        .catch((err) => {
            console.log(err);
        });
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['day', 'month', 'Year'],
                prefix: '0',
            }}
            style={{
                maxWidth: 1900,
            }}
            scrollToFirstError>
            <div className="register">
                <div className="register_nav3">
                    <div className="register_nav3_icon-alen">
                        <img src={logo} alt="" />
                        <div className="register_nav3_alen-hepl">
                            <label className="register_nav3_alen">alem</label>
                            <label className="register_nav3_hepl">help</label>
                        </div>
                    </div>
                    <div className="register_nav3_login-registe">
                        <div className="register_nav3_resetto1">
                            <button className="register_nav3_register">Register</button>
                        </div>
                        <div className="register_nav3_resetto2">
                            <button className="register_nav3_loginpage">Login</button>
                        </div>
                    </div>
                </div>
                <div className="register_form_user_image">
                    <div className="register_form_user">
                        <div className="register_form_user_h2">
                            <h1>Join Alem community</h1>
                        </div>
                        <div className="register_form_user_information">
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}>
                                <Input />
                            </Form.Item>

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

                            <Form.Item
                                name="nickname"
                                label="Nickname"
                                tooltip="What do you want others to call you?"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your nickname!',
                                        whitespace: true,
                                    },
                                ]}>
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="residence"
                                label="Habitual Residence"
                                rules={[
                                    {
                                        type: 'array',
                                        required: true,
                                        message: 'Please select your habitual residence!',
                                    },
                                ]}>
                                <Cascader options={residences} />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}>
                                <Input
                                    type="number"
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select gender!',
                                    },
                                ]}>
                                <Select placeholder="select your gender">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value
                                                ? Promise.resolve()
                                                : Promise.reject(new Error('Should accept agreement')),
                                    },
                                ]}
                                {...tailFormItemLayout}>
                                <Checkbox>
                                    I have read the <a href="">agreement</a>
                                </Checkbox>
                            </Form.Item>
                            <div className="register_button_user">
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        <h3>REGISTER</h3>
                                    </Button>
                                </Form.Item>
                            </div>
                            <div className="register_button_user_face_google">
                                <div className="register_button_user_face">
                                    <FacebookLogin
                                        appId="your-app-id"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                    />
                                </div>

                                <div className="register_button_user_google">
                                    <GoogleLogin
                                        clientId="your-client-id"
                                        buttonText="Login with Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register_form_image">
                        <img src={img_2} width="100%" height="100%" alt="" />
                    </div>
                </div>
            </div>
        </Form>
    );
};
export default App;
