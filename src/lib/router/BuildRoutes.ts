import * as express from 'express';
import { Router } from 'express';
import { ExtractMetaData, ControllerDataDefinition } from './ExtractMetaData';
import { ControllerArgsDefinition } from './decorators/controller.decorators';
import { RouteDefinition } from './RouteDefinition';
import { ApplicationControllersArgsDefinition } from '../interfaces';

export class BuildRoutes {
    private controllers: ApplicationControllersArgsDefinition[]
    private router: Router;

    constructor(controllers: ApplicationControllersArgsDefinition[]) {
        this.controllers = controllers;
        this.router = express.Router();

        this.setRouter();
    }
    public getRouter(): Router { return this.router; }

    private setRouter(): void {
        this.controllers.forEach(item => {
            item.controllers.forEach(controller => this.loadRoutes(controller, item.prefix));
        })
    }

    private loadRoutes(controller: any, routePrefix: string): void {
        const routes: RouteDefinition[] = ExtractMetaData.getRoutesFromController(controller);
        const controllerData: ControllerArgsDefinition = ExtractMetaData.getControllerParams(controller);

        switch(controllerData.type) {
            case 'html':
                this.loadAsHtmlRoutes(routes, controller, controllerData?.prefix);
            case 'rest':
                this.loadAsRestRoutes(routes, controller, controllerData?.prefix);
            case 'ssr-react':
                this.loadAsSsrRoutes(routes, controller, controllerData);
            case 'ssr-angular':
                this.loadAsSsrRoutes(routes, controller, controllerData);
            default:
                this.loadAsHtmlRoutes(routes, controller);
        }
    }

    private loadAsHtmlRoutes(routes: RouteDefinition[], controller: any, prefix?: string): void {}

    private loadAsRestRoutes(routes: RouteDefinition[], controller: any, prefix?: string): void {}

    private loadAsSsrRoutes(routes: RouteDefinition[], controller: any, controllerData: ControllerArgsDefinition): void {
        const prefix: string =  controllerData.prefix || '/';
        const layout: string = controllerData.layout || 'layout';
        if (routes.length) {
            routes.forEach((route, index) => {
                const path = `{}`
                //this.router[route.methodName]()
            })
        } else {
            this.router.get(prefix, (req, res, next) => {
                try {
                    res.render(layout);
                } catch(err) {
                    next({type: "No Layout Found", message: ""});
                }
            });
        }
    }
}