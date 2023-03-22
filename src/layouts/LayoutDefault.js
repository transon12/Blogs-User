// @flow
import React, { Suspense } from 'react';
// actions
import { Content, Header } from 'antd/lib/layout/layout';
import HeaderContent from './header-content/HeaderContent';
import { Layout } from 'antd';
import useMenu from '../hooks/useMenu';
import Lottie from 'react-lottie';
import loadingJson from '../assets/animation/loading.json';
import MenuTop from './components/menu-top/MenuTop';
import '../assets/scss/custom/_common.scss';
import LeftSidebar from './components/menu-top/left-side-bar/LeftSidebar';

type VerticalLayoutProps = {
    children?: any,
};

type VerticalLayoutState = {
    isMenuOpened?: boolean,
};
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJson,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const LayoutDefaut = ({ children }: VerticalLayoutProps, state: VerticalLayoutState): React$Element<any> => {
    const loading = () => (
        <div
            style={{
                display: 'flex',
                width: '100%',
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            className="text-center">
            <Lottie height={200} width={200} options={defaultOptions} />
        </div>
    );
    const menuCustom = useMenu();
    return (
        <>
            <Layout>
                <Header style={{ zIndex: 1, width: '100%' }}>
                    {/* <Header style={{ position: 'fixed', zIndex: 1}}> */}
                    <HeaderContent menu={menuCustom} />
                    {/* <MenuTop style={{ position: 'fixed', zIndex: 1, width: '100%' }}/> */}
                </Header>
                <div style={{ display: 'flex' }}>
                    <LeftSidebar />
                    <Content style={{ margin: '24px 16px 0', marginTop: 64 }}>
                        <Suspense fallback={loading()}>{children}</Suspense>
                    </Content>
                </div>
            </Layout>
        </>
    );
};

export default LayoutDefaut;
