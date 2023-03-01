import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';
import { Menu } from 'antd';
import './Drawer.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BarsOutlined } from '@ant-design/icons';
import useMenu from '../../hooks/useMenu';

const { SubMenu } = Menu;
// submenu keys of first level

const DrawerLeft = () => {
    const menuCustom = useMenu();
    const { t } = useTranslation();

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <div className="mobileVisible">
                <Button type="primary" className="menu-icon-primary" onClick={showDrawer}>
                    <BarsOutlined />
                </Button>
                <Drawer
                    title="This is Menu"
                    placement="right"
                    onClose={onClose}
                    visible={visible}
                    className="ant-dbody">
                    <Menu mode="inline">
                        {menuCustom?.map((item) => (
                            <>
                                {item.link !== undefined ? (
                                    <Menu.Item key={item.title} icon={item.icon}>
                                        <Link to={item.link} style={{ textDecoration: 'none' }}>
                                            {t(item.title)}
                                        </Link>
                                    </Menu.Item>
                                ) : (
                                    <>
                                        <SubMenu key={item.title} icon={item.icon} title={t(item.title)}>
                                            {item.children.map((child) => (
                                                <>
                                                    {child.link !== undefined ? (
                                                        <Menu.Item key={child.title} icon={child.icon}>
                                                            <Link to={child.link} style={{ textDecoration: 'none' }}>
                                                                {t(child.title)}
                                                            </Link>
                                                        </Menu.Item>
                                                    ) : (
                                                        <SubMenu
                                                            key={child.title}
                                                            icon={child.icon}
                                                            title={child.title}>
                                                            {child.children.map((child2) => (
                                                                <Menu.Item key={child2.title}>
                                                                    <Link
                                                                        to={child.link}
                                                                        style={{ textDecoration: 'none' }}>
                                                                        {t(child2.title)}
                                                                    </Link>
                                                                </Menu.Item>
                                                            ))}
                                                        </SubMenu>
                                                    )}
                                                </>
                                            ))}
                                        </SubMenu>
                                    </>
                                )}
                            </>
                        ))}
                    </Menu>
                </Drawer>
            </div>
        </>
    );
};

export default DrawerLeft;
