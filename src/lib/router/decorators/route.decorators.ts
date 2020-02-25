import "reflect-metadata";
import { RouteDefinition, RouteInterface, RouteOptionsDefinition } from './../RouteDefinition';

// export const route = (options: RouteInterface): MethodDecorator => {
//     return (target, propertyKey: string | symbol): void => {
//         if (!Reflect.hasMetadata('routes', target.constructor)) {
//             Reflect.defineMetadata('routes', [], target.constructor);
//         }

//         const routes = Reflect.getMetadata('routes', target.constructor) as RouteDefinition[];

//         routes.push({
//             requestMethod: options.method,
//             path: options.path,
//             methodName: propertyKey,
//             paramsType: options.paramsType
//         });
//         Reflect.defineMetadata('routes', routes, target.constructor);
//     };
// }

export const get = (path: string, options?: RouteOptionsDefinition): MethodDecorator => {
    return (target, propertyKey: string | symbol): void => {
        buildRequest(path, target, propertyKey, 'get', options);
    }
}
export const post = (path: string, options: RouteOptionsDefinition): MethodDecorator => {
    return (target, propertyKey: string | symbol): void => {
        buildRequest(path, target, propertyKey, 'post', options);
    }
}
export const put = (path: string, options: RouteOptionsDefinition): MethodDecorator => {
    return (target, propertyKey: string | symbol): void => {
        buildRequest(path, target, propertyKey, 'put', options);
    }
}
export const del = (path: string, options: RouteOptionsDefinition): MethodDecorator => {
    return (target, propertyKey: string | symbol): void => {
        buildRequest(path, target, propertyKey, 'delete', options);
    }
}

const buildRequest = (path: string, target: any, propertyKey: string | symbol, requestMethod: 'get' | 'post' | 'delete' | 'put', options: RouteOptionsDefinition): void => {

    if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
    }

    const routes = Reflect.getMetadata('routes', target.constructor) as RouteDefinition[];

    routes.push({
        requestMethod,
        path,
        methodName: propertyKey,
        options
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
}