// @flow
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// actions
import { changeLayout } from '../../redux/actions';
import * as layoutConstants from '../../constants/layout';
import HeaderSider from '../header-sider/HeaderSider';

const loading = () => <div className="text-center"></div>;

const HorizontalLayout = ({ children }, state) => {
    return (
        <>
            <HeaderSider>
                <Suspense fallback={loading()}>{children}</Suspense>
            </HeaderSider>
        </>
    );
};

export default HorizontalLayout;
