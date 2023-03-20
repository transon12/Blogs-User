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
        <><div>alo</div></>
    );
};

export default TopMenu;
