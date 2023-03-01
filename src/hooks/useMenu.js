// @flow
import { useEffect, useState, useMemo } from 'react';
import { MENU } from '../constants/menu-custom';

import { APICore } from '../helpers/api/apiCore';

const useMenu = (): { user: any | void, ... } => {
    const api = useMemo(() => new APICore(), []);

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        if (api.isUserAuthenticated()) {
            const { role } = api.getLoggedInUser();
            setMenu(MENU.filter((item) => item?.roles.includes(role)));
        }
    }, [api]);

    return menu;
};

export default useMenu;
