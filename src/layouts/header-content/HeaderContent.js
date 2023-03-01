import { Layout, Row, Col } from 'antd';
import './HeaderContent.scss';

import TopMenu from '../top-menu/TopMenu';
import NotiGroup from '../noti-group/NotiGroup';
import DrawerLeft from '../drawer/Drawer';
import Logo from '../logo';

const HeaderContent = ({ menu }) => {
    return (
        <>
            <Layout className="layout">
                <Row wrap={false} className="col-drawer-no-wrap ant-row-drawer">
                    <Logo />
                    <Col>
                        <DrawerLeft />
                    </Col>

                    <Col flex="auto" className="col-menu col-menu-drawer">
                        <TopMenu menu={menu} />
                    </Col>
                    <Col className="col-menu col-menu-drawer">
                        <NotiGroup />
                    </Col>
                </Row>
            </Layout>
        </>
    );
};

export default HeaderContent;
