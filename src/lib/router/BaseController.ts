import { Response } from 'express';
import { ReactDataInterface } from './../ServerRender';

export default class BaseController {
    private response: Response;
    private frontApp: ReactDataInterface;

    protected render(res: Response, templatePath: string, data?: any): void {

        if (this.frontApp) {
            const markup = this.frontApp.renderAsString(
                this.frontApp.App,
                data
            );
            res.render(this.frontApp.layout, {markup, ...data, ...this.frontApp.statics})
        } else {
            res.render(templatePath, data);
        }
    }

    public setResponse(res: Response): void {
        this.response = res;
    }

    public setFrontApp(frontApp: any): any {
        this.frontApp = frontApp
    }
}