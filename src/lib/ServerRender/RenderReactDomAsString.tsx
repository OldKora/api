import * as React from 'react';
import ReactDomServer from 'react-dom/server';

const RenderReactDomAsString = (App: any, assets?: any) => {

   return ReactDomServer.renderToString(
        <App assets={assets} />
    );
};

export default RenderReactDomAsString;