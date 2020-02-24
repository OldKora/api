import * as React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Request } from 'express';

const RenderReactDomAsString = (App: any, req: Request, assets?: any) => {

   return ReactDomServer.renderToString(
       <StaticRouter location={req.url} context={{}}>
           <App assets={assets} />
       </StaticRouter>
    );
};

export default RenderReactDomAsString;