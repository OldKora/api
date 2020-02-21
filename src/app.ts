import 'reflect-metadata';
import express from 'express';
import { Application } from 'express';
import { RouteDefinition } from './decorators/router/RouteDefinition';
import notFound from './middlewares/NotFound';

class App {
    public app: Application;
    public port: any;
    public host: string;
    public version: string

    constructor(appInit: { port: any; host: string; version: string; middleWares: any; controllers: any}) {
        this.app = express();
        this.port = appInit.port;
        this.host = appInit.host;
        this.version = appInit.version;

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.routes(appInit.controllers);
        this.middleWares(appInit.middleWares);
        this.assets()
        this.template();

        this.app.use(notFound);
    }

    private middleWares(_middleWares: { forEach: (arg0: (middleware: any) => void) => void; }) {
        _middleWares.forEach(middleware => {
            this.app.use(middleware);
        });
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            const instance = new controller();
            const prefix = Reflect.getMetadata('prefix', controller);
            const routes: RouteDefinition[] = Reflect.getMetadata('routes', controller);
            routes.forEach(route => {
                this.app[route.requestMethod](`/api/${this.version}${prefix}${route.path}`, (req: express.Request, res: express.Response) => {
                    instance[route.methodName](req, res);
                })
            });
        });
    }

    private assets() {
        this.app.use(express.static('public'));
        this.app.use(express.static('views'));
    }

    private template() {
        this.app.set('view engine', 'pug');
    }

    public listen() {
        this.app.listen(this.port, this.host, () => {
            console.log(`App listening on the ${this.host}:${this.port}`);
        })
    }
}

export default App;