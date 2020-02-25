import 'reflect-metadata';
import express from 'express';
import { Application as BaseApplication } from 'express';
import { RouteDefinition } from './router/RouteDefinition';
import notFound from './middlewares/NotFound';
import InternalServerErrorHandler from './middlewares/InternalServerErrorHandler';
import { parseParam } from './router/RouteDefinition';
import { ReactDataInterface, getStaticsFiles, renderAsString } from './ssr';
import { BuildRoutes } from './router';
import { ApplicationControllersArgsDefinition } from './interfaces';

class Application {
    public app: BaseApplication;
    public port: any;
    public host: string;
    public version: string;

    constructor(appInit: ArgsInterface) {
        this.app = express();
        this.port = appInit.port;
        this.host = appInit.host;

        // Default middle wares initialization
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Initialize route
        this.routes(appInit.controllers);

        // Customs middle wares
        this.middleWares(appInit.middleWares);

        // Assets and templates initialization
        this.assets()
        this.template();

        // Error Handler
        this.app.use(InternalServerErrorHandler);
        this.app.use(notFound);
    }

    private middleWares(_middleWares: { forEach: (arg0: (middleware: any) => void) => void; }) {
        _middleWares.forEach(middleware => {
            this.app.use(middleware);
        });
    }

    private routes(controllers: ApplicationControllersArgsDefinition[]) {
        const router: any = new BuildRoutes(controllers);
        // Load routes from controllers;
        controllers.forEach(item => {
            item.controllers.forEach(controller => this.loadRoutes(controller, item.prefix));
            // console.log(this.app._router.stack);
        });
    }

    private loadRoutes(controller: any, routePrefix: string) :void {

        // Create new instance of controller
        const instance = new controller();
        // Retrieve controller decorator param
        const prefix = Reflect.getMetadata('prefix', controller);
        // Get react application from controller
        const react: ReactDataInterface = Reflect.getMetadata('react', controller);
        // Retrieve all method decorator as route
        const routes: RouteDefinition[] = Reflect.getMetadata('routes', controller);
        // Create a request for each route in the controller
        // api route def /api/${this.version}${prefix}${route.path}
        routes.forEach(route => {
            const path = `${routePrefix}${prefix ? prefix : ''}${route.path}`;
            this.app[route.requestMethod](path, (req: express.Request, res: express.Response, next) => {
                // Check if request param type corresponding to expected param types
                // if request param type equal to expected param type them call the corresponding method in the controller
                try {
                    if (route.options) {
                        route.options?.paramsType?.forEach(param => {
                            try {
                                // using parse to check if route param type equal to request param type
                                parseParam(param.name, req.params[param.name], param.type);
                                // call the corresponding method
                                //res.send(rou)
                            } catch(e) { next({name: "RequestTypeException", message: e.message + ` On route [${prefix}], method [${route.methodName.toString()}]`, trace: e.stack}) }
                        });
                        const data = instance[route.methodName]();
                        const markup = renderAsString(
                            react.App,
                            req,
                            'ssr-react',
                            data
                        );
                        res.render(route.options.template, {markup, data, ...getStaticsFiles()});
                    } else {
                        instance[route.methodName](req, res);
                    }
                } catch(e) { next(e) }
            });
        });
    }

    private assets(): void {
        this.app.use(express.static('public'));
        this.app.use(express.static('views'));
    }

    private template(): void {
        this.app.set('view engine', 'pug');
    }

    public listen(): void {
        this.app.listen(this.port, this.host, () => {
            console.log(`App listening on the ${this.host}:${this.port}`);
        })
    }
}

export interface ArgsInterface {
    port: any;
    host: string;
    middleWares: any;
    controllers: any;
}

export default Application;