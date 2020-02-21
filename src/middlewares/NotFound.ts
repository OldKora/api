import { Request, Response } from 'express';

const notFound = (req: Request, res: Response, next: any) => {
    res.status(404);

    const error = {
        title: "Resource Not found",
            description: `We can't reach ${req.url} with method: ${req.method}`
    }

    if (req.accepts('html')) {
        res.render('errors/not-found', { error });
        return;
    }

    if (req.accepts('json')) {
        res.send({error});
        return;
    }

    res.type('text').send(error.title)
}

export default notFound;