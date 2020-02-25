import { Request, Response } from 'express';
import { react } from './../lib/ssr';
import App from './../../views/react-src/App';

import {
    controller,
    get,
} from './../lib/router';

@controller({
    type: 'ssr-react',
    prefix: '',
    layout: 'home/index',
    frontApp: App,
})
@react({
    App,
    layout: 'home/index'
})
export default class HomeController {

    @get('/', {
        template: 'home/index'
    })
    public index() {
        return {
            name: 'Evelyne Nzimeyera',
        }
        // this.render(res, null, {
        //     name: 'Evelyne Nzimenyera'
        // });
    }

    @get('/about', {
        template: 'home/index'
    })
    public about(req?: Request, res?: Response) {
        return {
            about: {
                pageTitle: 'About Us',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta, architecto deleniti ipsum possimus vel asperiores at! Suscipit molestiae nihil autem, provident magni sapiente commodi, repudiandae, repellendus culpa neque sequi.'
            }
        }
        // this.render(res, null, {
        //    about: {
        //         pageTitle: 'About',
        //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta, architecto deleniti ipsum possimus vel asperiores at! Suscipit molestiae nihil autem, provident magni sapiente commodi, repudiandae, repellendus culpa neque sequi.',
        //    }
        // })
    }
}