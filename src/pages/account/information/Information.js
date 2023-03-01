import React, { useState, useEffect } from 'react';
import '../information/style.scss';
import { useTranslation } from 'react-i18next';
import {Typography, Button, Row, Col, Tabs, Select, Input, Form, Image, Spin, notification, Avatar, Popconfirm, Space } from 'antd';
import i18n from 'i18next';
import { required, specialCharacters, comboBoxSelect } from '../../../utils/validate';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailsUser, updateUser, resetAuth, getAllProjects } from './../../../redux/auth/actions';

const { Title } = Typography;

const Information = () => {
    const [projects, setProjects] = useState([]);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const {
        loading,
        details: userDetails,
        error: errorUpdate,
        userUpdate: successUpdate,
        projects: projectList,
    } = useSelector((state) => state.Auth);
    useEffect(() => {
        dispatch(getDetailsUser());
        dispatch(getAllProjects());
    }, [dispatch]);
    useEffect(() => {
        if (Object.keys(userDetails).length != 0) {
            let projects = userDetails.project;
            let role = userDetails.role == 1 ? 'DLead' : 'Member';
            projects = projects.map((item) => item?.name);
            userDetails.project = projects;
            userDetails.role = role;
            setProjects(userDetails.project);
            form.setFieldsValue(userDetails);
        }
    }, [userDetails]);
    const { t } = useTranslation();
    const { TabPane } = Tabs;
    const { Option } = Select;

    const toastUpdateSuccess = () => {
        notification.success({
            message: `Update Profile`,
            description: 'Update Successfully!',
            placement: 'topRight',
            onClose: () => {
                dispatch(resetAuth());
            },
        });
    };

    const toastUpdateError = () => {
        notification.error({
            message: `Update Error`,
            description: errorUpdate,
            placement: 'topRight',
            onClose: () => {
                dispatch(resetAuth());
            },
        });
    };

    const onFinish = (formdata) => {
        formdata.idList = formdata?.project;
        delete formdata['project'];
        delete formdata['role'];
        console.log('formdata', formdata);
        dispatch(updateUser(formdata));
    };
    useEffect(() => {
        if (successUpdate) {
            toastUpdateSuccess();
        }
        if (errorUpdate) {
            toastUpdateError();
        }
    }, [errorUpdate, successUpdate]);

    return (
        <div>
            <Tabs type="card">
                <TabPane tab="Account" key="1">
                    <div className="informationAccount">
                        <Form onFinish={onFinish} form={form}>
                            <Row gutter={[24, 24]}>
                                <Col xs={24} align="left">
                                    <Title level={2}>{t('Account information')}</Title>
                                </Col>
                            </Row>
                            <br />

                            <Row gutter={[24, 24]}>
                                <Col xl={4} align="middle">
                                    <Image className="imageAvatar" src={form.getFieldValue('pictureUrl')} />
                                </Col>
                                <Col xl={6}>
                                    <h3 className="fullName">
                                        {t(' Name')} : {form.getFieldValue('fullName')}
                                    </h3>
                                    <div className="userDivision">
                                        {form.getFieldValue('role')} {form.getFieldValue('divisionName')}
                                    </div>
                                    <div>
                                        {t(' Email')} : {form.getFieldValue('email')}
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <Col xl={8}>
                                <Spin spinning={loading}>
                                    <Row wrap={false} gutter={24}>
                                        <Col flex="100px">{t('Position')} :</Col>
                                        <Col flex="auto" align="left">
                                            <Form.Item
                                                name="position"
                                                rules={[comboBoxSelect(t('Please select position!'))]}>
                                                <Select className="select" style={{ width: '100%' }}>
                                                    <Option key="2" value="Interns">
                                                        {t('Interns')}
                                                    </Option>
                                                    <Option key="3" value="Probationary staff">
                                                        {t('Probationary staff')}
                                                    </Option>
                                                    <Option key="4" value="Official staff">
                                                        {t('Official staff')}
                                                    </Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={[24, 24]}>
                                        <Col flex="100px">{t('Job Title')} :</Col>
                                        <Col flex="auto">
                                            <Form.Item
                                                name="jobTitle"
                                                rules={[
                                                    required(t('Please input your job title!')),
                                                    specialCharacters,
                                                ]}>
                                                <Input type="text" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={[24, 24]} wrap={false}>
                                        <Col flex="100px">{t('Projects')} :</Col>
                                        <Col flex="auto" align="left">
                                            <Space direction="vertical" style={{ width: '100%' }}>
                                                <Form.Item
                                                    name="project"
                                                    rules={[comboBoxSelect(t('Please select or input a project!'))]}>
                                                    <Select
                                                        mode="tags"
                                                        options={projectList?.content?.map((item) => ({
                                                            value: item.name,
                                                            label: item.name,
                                                            key: item.id,
                                                        }))}
                                                        allowClear
                                                        maxTagCount={4}
                                                        style={{ width: '100%' }}
                                                        optionLabelProp="label"
                                                        tokenSeparators={[',']}
                                                    />
                                                </Form.Item>
                                            </Space>
                                        </Col>
                                    </Row>
                                </Spin>
                            </Col>

                            <Row>
                                <Col xl={7} xs={18}></Col>
                                <Col xl={2} xs={6} align="left">
                                    <Form.Item>
                                        <Popconfirm
                                            title={<div className="popConfirmTitle">Are you sure submit profile?</div>}
                                            placement="top"
                                            onConfirm={() => {
                                                onFinish(form.getFieldsValue());
                                            }}
                                            okText="Yes"
                                            cancelText="No">
                                            <Button size="large" type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Popconfirm>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
};
export default Information;
