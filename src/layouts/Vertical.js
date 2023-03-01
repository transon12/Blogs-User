// @flow
import React, { Suspense } from 'react';

const loading = () => <div className=""></div>;

type VerticalLayoutProps = {
    children?: any,
};

type VerticalLayoutState = {
    isMenuOpened?: boolean,
};

const VerticalLayout = ({ children }: VerticalLayoutProps, state: VerticalLayoutState): React$Element<any> => {
    return (
        <>
            <Suspense fallback={loading()}>{children}</Suspense>
        </>
    );
};
export default VerticalLayout;
