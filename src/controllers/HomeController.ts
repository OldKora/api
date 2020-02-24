import { Request, Response } from 'express';
import { Controller } from './../lib/router/Controller';
import { Get } from './../lib/router';
import BaseController from './../lib/router/BaseController';
import { React } from './../lib/ServerRender';
import App from './../../views/react-src/App';

@Controller('')
@React({
    App,
    layout: 'home/index'
})
export default class HomeController extends BaseController {

    @Get('/')
    public index(req: Request, res: Response) {
        this.render(res, null, {
            name: 'Evelyne Nzimenyera'
        });
    }

    @Get('/about')
    public about(req: Request, res: Response) {
        this.render(res, null, {
           about: {
                pageTitle: 'About',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta, architecto deleniti ipsum possimus vel asperiores at! Suscipit molestiae nihil autem, provident magni sapiente commodi, repudiandae, repellendus culpa neque sequi.',
           }
        })
    }
}