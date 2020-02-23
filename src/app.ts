import 'reflect-metadata';
import express from 'express';
import { Application } from 'express';
import fs from 'fs';
import path from 'path';
import { RouteDefinition } from './router/RouteDefinition';
import notFound from './middlewares/NotFound';
import InternalServerErrorHandler from './middlewares/InternalServerErrorHandler';
import { parseParam } from './router/RouteDefinition';

class App {
    public app: Application;
    public port: any;
    public host: string;
    public version: string;

    constructor(appInit: { port: any; host: string; version: string; middleWares: any; controllers: any; apiControllers: any}) {
        this.app = express();
        this.port = appInit.port;
        this.host = appInit.host;
        this.version = appInit.version;

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

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        // Get each controller
        const router = express.Router();
        controllers.forEach(controller => {
            // Create new instance of controller
            const instance = new controller();
            // Retrieve controller decorator param
            const prefix = Reflect.getMetadata('prefix', controller);
            // Retrieve all method decorator as route
            const routes: RouteDefinition[] = Reflect.getMetadata('routes', controller);
            // Create a request for each route in the controller
            // api route def /api/${this.version}${prefix}${route.path}
            routes.forEach(route => {
                router[route.requestMethod](`${prefix}${route.path}`, (req: express.Request, res: express.Response, next) => {
                    // Check if request param type corresponding to expected param types
                    // if request param type equal to expected param type them call the corresponding method in the controller
                    if (route.paramsType) {
                        route.paramsType.forEach(param => {
                            try {
                                // using parse to check if route param type equal to request param type
                                parseParam(param.name, req.params[param.name], param.type);
                                // call the corresponding method
                                instance[route.methodName](req, res);
                            } catch(e) { next({name: "RequestTypeException", message: e.message + ` On route [${prefix}], method [${route.methodName.toString()}]`, trace: e.stack}) }
                        })
                    } else {
                        instance[route.methodName](req, res);
                    }
                })
            });
        });
        this.app.use(router);
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

export default App;