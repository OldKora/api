import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './App';

import './style.scss';

console.log('assets', window.assets);

ReactDom.hydrate(
    <App assets={window?.assets} />,
    document.getElementById('root')
);
