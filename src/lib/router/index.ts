import "reflect-metadata";
import { RouteDefinition, RouteInterface } from './RouteDefinition';

export const Route = (options: RouteInterface): MethodDecorator => {
    return (target, propertyKey: string | symbol): void => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }

        const routes = Reflect.getMetadata('routes', target.constructor) as RouteDefinition[];

        routes.push({
            requestMethod: options.method,
            path: options.path,
            methodName: propertyKey,
            paramsType: options.paramsType
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
}

export const Get = (path: string): MethodDecorator => {
    return (target, propertyKey: string | symbol): void => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }

        const routes = Reflect.getMetadata('routes', target.constructor) as RouteDefinition[];

        routes.push({
            requestMethod: 'get',
            path,
            methodName: propertyKey
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    }
}
export const Post = (path: string): MethodDecorator => {
    return (target, propertyKey: string | symbol): void => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }

        const routes = Reflect.getMetadata('routes', target.constructor) as RouteDefinition[];

        routes.push({
            requestMethod: 'post',
            path,
            methodName: propertyKey
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    }
}
export const Put = (path: string): MethodDecorator => {
    return (target, propertyKey: string | symbol): void => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }

        const routes = Reflect.getMetadata('routes', target.constructor) as RouteDefinition[];

        routes.push({
            requestMethod: 'put',
            path,
            methodName: propertyKey
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    }
}
export const Delete = (path: string): MethodDecorator => {
    return (target, propertyKey: string | symbol): void => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }

        const routes = Reflect.getMetadata('routes', target.constructor) as RouteDefinition[];

        routes.push({
            requestMethod: 'delete',
            path,
            methodName: propertyKey
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    }
}