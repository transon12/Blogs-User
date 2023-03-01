import React from 'react';
import ReactDOM from 'react-dom';

import i18n from './i18n';

import App from './App';

import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { I18nextProvider } from 'react-i18next';

ConfigProvider.config({
    theme: {
        primaryColor: '#25b864',
    },
});
ReactDOM.render(
    <ConfigProvider>
        <Provider store={configureStore({})}>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </Provider>
    </ConfigProvider>,
    document.getElementById('root')
);
