import { Request, Response } from 'express';
import { Controller } from './../decorators/router/Controller';
import { Route, Get, Post, Put, Delete } from './../decorators/router';

@Controller('/products')
export default class ProductController {

    @Post('/')
    public create(req: Request, res: Response) {
        return res.send({data: req.body})
    }

    @Get('/')
    public read(req: Request, res: Response) {
        //return res.status(200).json({"message": "Products"})
        res.render('home/index', {
            data: '<p>Html from server</p>'
        });
    }

    @Route({
        path: '/:id',
        method: 'put',
        paramsType: [
            {name: 'id', type: 'string' }
        ]
    })
    public update(req: Request, res: Response) {
        return res.send({
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

    @Get('/:id')
    public findOne(req: Request, res: Response) {
        return res.status(200).json({params: req.params})
    }
}