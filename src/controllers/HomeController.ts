import { Request, Response } from 'express';
import { Controller } from './../router/Controller';
import { Route, Get, Post, Put, Delete } from './../router';
import BaseController from './../router/BaseController';

@Controller('')
export default class HomeController extends BaseController {

    @Get('/')
    public index(req: Request, res: Response) {
        this.render(res, 'home/index', {
            data: '<p>Html from server</p>'
        });
    }
}