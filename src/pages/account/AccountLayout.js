// @flow
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type AccountLayoutProps = {
    bottomLinks?: React$Element<any>,
    children?: any,
};

const AccountLayout = ({ bottomLinks, children }: AccountLayoutProps): React$Element<any> => {
    const { t } = useTranslation();

    return <>{children}</>;
};

export default AccountLayout;
