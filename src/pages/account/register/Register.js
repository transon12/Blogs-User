import {
    
    Button,
    Cascader,
    Checkbox,
    Form,
    Input,
    Select,
  } from 'antd';
  import { useState } from 'react';
  import "./register.scss"
// import logo from "../../../assets/images/register/icon.png";
  const { Option } = Select;
  const residences = [
    {
      value: '31',
      label: 'day',
      children: [
        {
          value: '12',
          label: 'month',
          children: [
            {
              value: '2023',
              label: 'Year',
            },
          ],
        },
      ],
    },
    {
      value: 'day',
      label: 'day',
      children: [
        {
          value: 'month',
          label: 'month',
          children: [
            {
              value: 'Year',
              label: 'Year',
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
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="86">0</Option>
          <Option value="87">+84</Option>
        </Select>
      </Form.Item>
    );
    const suffixSelector = (
      <Form.Item name="suffix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
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
    return (
        
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['day', 'month', 'Year'],
          prefix: '86',
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <div 
        className="register_form_user"
        >
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
          ]}
        >
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
          hasFeedback
        >
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
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
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
          ]}
        >
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
          ]}
        >
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
          ]}
        >
          <Input
          type='number'
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
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        </div>
  
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  };
  export default App;










// import img_2 from "../../../assets/images/register/Image (1).png";
// import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { Redirect, Link } from 'react-router-dom';
// // import { Button, Alert, Row, Col } from 'react-bootstrap';
// // import { useTranslation } from 'react-i18next';
// // import * as yup from 'yup';
// // import { yupResolver } from '@hookform/resolvers/yup';

// // //actions
// // import { resetAuth, signupUser } from '../../redux/actions';

// // // components
// // import { VerticalForm, FormInput } from '../../components/';

// // import AccountLayout from './AccountLayout';

// /* bottom link */
// // const BottomLink = () => {
// //     const { t } = useTranslation();

// //     return (
// //         <Row className="mt-3">
// //             <Col className="text-center">
// //                 <p className="text-muted">
// //                     {t('Already have account?')}{' '}
// //                     <Link to={'/login'} className="text-muted ms-1">
// //                         <b>{t('Log In')}</b>
// //                     </Link>
// //                 </p>
// //             </Col>
// //         </Row>
// //     );
// // };

// const Register = () => {
//     return (
//         <>
//             <div className="register">
//                 <div className="register_nav3">
//                     <div className="register_nav3_icon-alen">
//                         <img src={logo} alt="" />
//                         <div className="register_nav3_alen-hepl">
//                             <label className="register_nav3_alen">alem</label>
//                             <label className="register_nav3_hepl">help</label>
//                         </div>
//                     </div>
//                     <div className="register_nav3_login-registe">
//                         <div className="register_nav3_resetto1">
//                             <button className="register_nav3_register">Register</button>
//                         </div>
//                         <div className="register_nav3_resetto2">
//                             <button className="register_nav3_loginpage">Login</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="register_form_user_image">
//                     <div className="register_form_user">
//                         <h2>Join Alem community</h2>
//                         <p>Get more features and priviliges by joining to the most helpful community</p>
//                         <div className="register_form_input_user">
//                             <p>User name</p>
//                             <input type="text" name="firstname" />
//                         </div>
//                         <div className="register_form_input_user">
//                             <p>Birthday</p>
//                             <input type="number" name="number" />
//                             <div id="number-error-message" />
//                         </div>
//                         <div className="register_form_input_gender">
//                             <p>Gender</p>
//                             <input type="radio" name="gender" defaultValue="male" />
//                              Male
//                             <input type="radio" name="gender" defaultValue="female" />
//                              Female
//                             <input type="radio" name="gender" defaultValue="other" />
//                              Other
//                         </div>
//                         <div className="register_form_input_user">
//                             <p>Email</p>
//                             <input type="text" name="email" />
//                             <div id="email-error-message" />
//                         </div>
//                         <div className="register_form_input_user">
//                             <p>Password</p>
//                             <input type="password" name="password" />
//                             <div id="password-error-message" />
//                         </div>
//                         <div className="register_form_input_user">
//                             <p>Repeat password</p>
//                             <input type="password" name="password" />
//                             <div id="password-error-message" />
//                         </div>
//                         <div className="register_button_user">
//                             <button>
//                                 <h3>REGISTER</h3>
//                             </button>
//                         </div>
//                         <div className="register_button_user_face_google">
//                             <button className="register_button_user_face">
//                             <FacebookOutlined />
//                             <a href='https://www.facebook.com/'>facebook</a> 
                            
//                             </button>
//                             <button className="register_button_user_google">
//                             <GooglePlusOutlined /> 
//                             <a href='https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser'>
//                             google
//                             </a>
//                             </button>
//                         </div>
//                     </div>
//                     <div className="register_form_image">
//                         <img src={img_2} width="100%" height="100%" alt="" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Register;

