import { Response } from 'express';
import { ReactDataInterface } from './../ServerRender';

export default class BaseController {
    private frontApp: ReactDataInterface;

    protected render(res: Response, templatePath?: string, data?: any): void {

        if (this.frontApp) {
            const markup = this.frontApp.renderAsString(
                this.frontApp.App,
                data
            );
            res.render(this.frontApp.layout, {markup, ...this.frontApp.statics, data})
        } else {
            res.render(templatePath, data);
        }
    }

    public setFrontApp(frontApp: any): any {
        this.frontApp = frontApp
    }
}