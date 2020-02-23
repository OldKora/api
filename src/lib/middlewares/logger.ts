import { Request, Response } from 'express';

const logger = (req: Request, res: Response, next: any) => {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('origin')}`);
    next();
}

export default logger;