import 'reflect-metadata';
import { ControllerArgsDefinition } from './decorators/controller.decorators';
import { RouteDefinition } from './RouteDefinition';

export class ExtractMetaData {

    public static getDataFromController(controller: any): ControllerDataDefinition {
        return {
            routes: ExtractMetaData.getRoutesFromController(controller),
            data: ExtractMetaData.getControllerParams(controller)
        }
    }

    public static getControllerParams(controller: any): ControllerArgsDefinition {
        const data: ControllerArgsDefinition = Reflect.getMetadata('controller', controller);
        return  data;
    }

    public static getRoutesFromController(controller: any): RouteDefinition[] {
        const routes: RouteDefinition[] = Reflect.getMetadata('routes', controller);
        return routes;
    }
}

export interface ControllerDataDefinition {
    routes: RouteDefinition[];
    data: ControllerArgsDefinition;
}