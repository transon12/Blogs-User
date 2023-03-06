import { Layout, Row, Col } from 'antd';
import './HeaderContent.scss';

import TopMenu from '../top-menu/TopMenu';
import NotiGroup from '../noti-group/NotiGroup';
import DrawerLeft from '../drawer/Drawer';
import Logo from '../logo';
import MenuTop from '../components/menu-top/MenuTop';

const HeaderContent = ({ menu }) => {
    return (
        <>
            <Layout className="layout">
            <MenuTop/>
            </Layout>
        </>
    );
};

export default HeaderContent;
