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
    public name: string;

    constructor(appInit: ArgsInterface) {
        this.app = express();
        this.port = appInit.port;
        this.host = appInit.host;
        // Default middle wares initialization
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        // Initialize routes
        const router = new BuildRoutes(appInit.controllers).getRouter();
        this.app.use(router)

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