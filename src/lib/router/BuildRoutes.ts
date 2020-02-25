import express from 'express';
import { ExtractMetaData, ControllerDataDefinition } from './ExtractMetaData';
import { ControllerArgsDefinition } from './decorators/controller.decorators';
import { RouteDefinition, ParamsType } from './';
import { ApplicationControllersArgsDefinition } from '../interfaces';
import { parseParam } from './RouteDefinition';
import { renderAsString, getStaticsFiles } from '../ssr';

export class BuildRoutes {
    private controllers: ApplicationControllersArgsDefinition[]
    private router: express.Router;

    constructor(controllers: ApplicationControllersArgsDefinition[]) {
        this.controllers = controllers;
        this.router = express.Router();

        this.setRouter();
    }

    public getRouter(): express.Router { return this.router; }

    private setRouter(): void {
        this.controllers.forEach(item => {
            item.controllers.forEach(controller => this.loadRoutes(controller, item.prefix));
        })
    }

    private loadRoutes(controller: any, rootPrefix: string): void {
        const routes: RouteDefinition[] = ExtractMetaData.getRoutesFromController(controller);
        const controllerData: ControllerArgsDefinition = ExtractMetaData.getControllerParams(controller);
        controller = new controller();
        switch(controllerData.type) {
            case 'html':
                this.loadAsHtmlRoutes(rootPrefix, routes, controller, controllerData?.prefix);
            case 'rest':
                this.loadAsRestRoutes(rootPrefix, routes, controller, controllerData?.prefix);
            case 'ssr-react':
                this.loadAsSsrRoutes(rootPrefix, routes, controller, controllerData);
            case 'ssr-angular':
                this.loadAsSsrRoutes(rootPrefix, routes, controller, controllerData);
            default:
                this.loadAsHtmlRoutes(rootPrefix, routes, controller);
        }
    }

    private loadAsRestRoutes(rootPrefix: string, routes: RouteDefinition[], controller: any, prefix?: string): void {}
    
    private loadAsHtmlRoutes(rootPrefix: string, routes: RouteDefinition[], controller: any, prefix?: string): void {

    }

    private loadAsSsrRoutes(rootPrefix: string, routes: RouteDefinition[], controller: any, controllerData: ControllerArgsDefinition): void {
        const prefix: string =  controllerData.prefix || '';
        const layout: string = controllerData.layout || 'layout';
        if (routes.length) {
            routes.forEach(route => {
                const path = `${rootPrefix}${prefix}${route.path}`
                this.router[route.requestMethod](path, (req, res, next) => {
                    try {
                        this.validateSsrController(route, controllerData, req);
                        const data = this.callMethod(controller, route.methodName, req);
                        const markup = renderAsString(
                            controllerData.frontApp,
                            req,
                            'ssr-react',
                            data
                        );
                        res.render(controllerData.layout, {markup, data, ...getStaticsFiles()});
                    } catch(err) {
                        next({name: "Controller decorator Error", message: err});
                    }
                });
            })
        } else {
            this.router.get(`${prefix}/*`, (req, res, next) => {
                try {
                    res.render(layout);
                } catch(err) {
                    next({type: "No Layout Found", message: ""});
                }
            });
        }
    }

    private validateSsrController(route: RouteDefinition, controllerData: ControllerArgsDefinition, req: express.Request) {
        if (route.requestMethod !== 'get') throw new Error("The request method must be a GET request in the ssr controller.");
        if (route.options && route.options.template) throw new Error("The [template] param is not allowed in ssr methods decorator, define [layout] param in the controller decorator.");
        if (route.options && route.options.paramsType && !this.validateGetParams(req, route.options?.paramsType)) throw new Error(`Invalid parameter(s) in ${String(route.methodName)}`);
        if (!controllerData.layout) throw new Error("the [layout] param is required in controller ssr decorator.");
        if (!controllerData.frontApp) throw new Error("Front Application is not define.")
    }

    private validateGetParams(req: express.Request, paramsType: ParamsType[]): boolean {
        let isValidated = false;
        paramsType.forEach(param => {
            try {
                parseParam(param.name, req.params[param.name], param.type);
                isValidated = true;
            } catch (e) { isValidated = false }
        });
        return isValidated;
    }

    private callMethod(instance: any, methodName: string | symbol, req: express.Request) {
        if (req.params) return instance[methodName](req);
        else return instance[methodName]();
    }
}