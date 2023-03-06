import React from 'react';
import './NotiGroup.scss';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Space, Dropdown, Menu } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';


import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions';
import { APICore } from '../../helpers/api/apiCore';
const api = new APICore();
const NotiGroup = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = api.getLoggedInUser();
    function logOut() {
        dispatch(logoutUser());
    }
    const userMenu = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Account
                <Link to="/account" />
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2" icon={<LogoutOutlined />} onClick={logOut}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        // <div className="noti-group">
        //     {/* <Notification /> */}

        //     {/* <Language /> */}

        //     <Dropdown overlay={userMenu} placement="bottomLeft">
        //         <Space className="item" onClick={(e) => e.preventDefault()}>
        //             <Avatar size={25} src={user?.pictureUrl} />
        //             {user?.givenName}
        //         </Space>
        //     </Dropdown>
        // </div>
       <></>
    );
};

export default NotiGroup;
