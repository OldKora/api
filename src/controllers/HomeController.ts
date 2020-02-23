import { Request, Response } from 'express';
import { Controller } from './../lib/router/Controller';
import { Get } from './../lib/router';
import BaseController from './../lib/router/BaseController';

@Controller('')
export default class HomeController extends BaseController {

    @Get('/')
    public index(req: Request, res: Response) {
        this.render(res, 'home/index', {
            data: '<p>Html from server</p>'
        });
    }
}