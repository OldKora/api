import { Request, Response } from 'express';
import { Controller } from './../../lib/router/Controller';
import { Get, Post, Put, Delete } from './../../lib/router';

@Controller('/inventories')
export default class InventoryController {
    @Post('/')
    public create(req: Request, res: Response) {
        return res.send({data: req.body})
    }

    @Get('/')
    public read(req: Request, res: Response) {
        return res.status(200).json({"message": "Inventory"})
    }

    @Put('/:id')
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