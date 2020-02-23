import { Response } from 'express';

export default class BaseController {
    protected render(res: Response, templatePath: string, data?: any): void {
        res.render(templatePath, data);
    }
}