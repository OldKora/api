import { Request, Response } from 'express';

const InternalServerErrorHandler = (error: any, req: Request, res: Response, next: any) => {
    res.status(500);

    if (req.accepts('html')) {
        res.render('errors/500', { error });
        return;
    }

    if (req.accepts('json')) {
        res.send({error});
        return;
    }

    res.type('text').send(error.message)
}

export default InternalServerErrorHandler;