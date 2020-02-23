import { Request, Response } from 'express';
import { Controller } from '../router/Controller';
import { Route, Get, Post, Put, Delete } from '../router';
import BaseController from '../router/BaseController';

@Controller('/products')
export default class ProductController extends BaseController {

    @Post('/')
    public create(req?: Request, res?: Response) {
        return res.send({data: req.body})
    }

    @Get('/')
    public read(req?: Request, res?: Response) {
        //return res.status(200).json({"message": "Products"})
        // return this.render('home/index', {
        //     data: '<p>Html from server</p>'
        // )
        this.render(res, 'home/index', {
            data: '<p>Html from server</p>'
        });
    }

    @Route({
        path: '/:id',
        method: 'put',
        paramsType: [
            {name: 'id', type: 'number' }
        ]
    })
    public update(req: Request, res: Response) {
        res.send({
            id: req.params.id,
            data: req.body
        })
    }

    @Delete('/:id')
    public delete(req: Request, res: Response) {
        return res.send({
            id: req.params.id,
            action: "DELETE"
        })
    }

    @Route({
        path: '/:id',
        method: 'get',
        paramsType: [
            {name: 'id', type: 'number'}
        ]
    })
    public findOne(req: Request, res: Response) {
        return res.status(200).json({params: req.params})
    }
}