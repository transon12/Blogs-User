import { DashboardOutlined, DingdingOutlined, LineChartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { ROLES } from './me';

export const MENU = [
    {
        icon: <DashboardOutlined />,
        title: 'Dashboard',
        link: '/dashboard',
        roles: [ROLES.MEMBER, ROLES.DLEAD]
    },
    {
        icon: <UnorderedListOutlined />,
        title: 'ME list',
        link: 'me-list',
        roles: [ROLES.MEMBER, ROLES.DLEAD]
    },
];
