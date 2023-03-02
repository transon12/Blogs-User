// @flow
import React from 'react';
import Routes from './routes/Routes';

// Themes

// For Saas import Saas.scss
import './assets/scss/Saas.scss';

import { useEffect } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
/**
 * Main app component
 */
const App = () => {

    useEffect(() => {
        Spin.setDefaultIndicator(antIcon);
    }, []);
   
    return (
        <>
            <Routes></Routes>
           
        </>
    );
};

export default App;
