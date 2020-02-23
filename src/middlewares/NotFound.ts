import { Request, Response } from 'express';

const notFound = (req: Request, res: Response, next: any) => {
    res.status(404);

    const error = {
        name: "Resource Not found",
        message: `We can't reach ${req.url} with method: ${req.method}`
    }

    if (req.accepts('html')) {
        res.render('errors/404', { error });
        return;
    }

    if (req.accepts('json')) {
        res.send({error});
        return;
    }

    res.type('text').send(error.message)
}

export default notFound;