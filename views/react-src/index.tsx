import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import './style.scss';

ReactDom.hydrate(
    <Router>
        <App assets={window?.assets} />
    </Router>,
    document.getElementById('root')
);
