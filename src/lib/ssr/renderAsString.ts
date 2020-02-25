import { Request } from 'express';
import { RenderReactDomAsString } from './';

export const renderAsString = (App: any, req: Request, type: 'ssr-react' | 'ssr-angular', assets?: any): string => {
    switch(type) {
        case 'ssr-react':
            return RenderReactDomAsString(App, req, assets);
        case 'ssr-angular':
            return '';
        default:
            throw new Error(`${type} is not supported for server side rendering`)
    }
}
