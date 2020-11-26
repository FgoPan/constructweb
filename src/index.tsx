import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, rootStore } from './stores';
import './index.css';
import 'antd/dist/antd.css';
import '@/assets/styles/index.less';
import App from './App';

if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(
    <Provider value={rootStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
