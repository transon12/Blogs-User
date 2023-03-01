import React from 'react';
import './TopMenu.scss';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

import { useTranslation } from 'react-i18next';

const { SubMenu } = Menu;

const TopMenu = ({ menu }) => {
    const { t } = useTranslation();
    const location = useLocation();
    return (
        <Menu mode="horizontal" selectedKeys={[location?.pathname.replace('/', '')]}>
            {menu?.map((item, index) => (
                <>
                    {item.link !== undefined ? (
                        <Menu.Item key={item.link} icon={item.icon}>
                            <Link to={item.link} style={{ textDecoration: 'none' }}>
                                {t(item.title)}
                            </Link>
                        </Menu.Item>
                    ) : (
                        <>
                            <SubMenu key={item.link} icon={item.icon} title={t(item.title)}>
                                {item.children.map((child) => (
                                    <>
                                        {child.link !== undefined ? (
                                            <Menu.Item key={child.link} icon={child.icon}>
                                                <Link to={child.link} style={{ textDecoration: 'none' }}>
                                                    {t(child.title)}
                                                </Link>
                                            </Menu.Item>
                                        ) : (
                                            <SubMenu key={child.link} icon={child.icon} title={child.title}>
                                                {child.children.map((child2) => (
                                                    <Menu.Item key={child2.link}>
                                                        <Link to={child.link} style={{ textDecoration: 'none' }}>
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
    );
};

export default TopMenu;
