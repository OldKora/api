import "reflect-metadata";

export const controller = (args?: ControllerArgsDefinition): ClassDecorator => {
    return (target: any) => {
        Reflect.defineMetadata('controller', args, target);

        if (!Reflect.hasMetadata('routes', target)) {
            Reflect.defineMetadata('routes', [], target);
        }
    }
}

export interface ControllerArgsDefinition {
    type: 'ssr-react' | 'ssr-angular' | 'rest' | 'html';
    prefix?: string;
    layout?: string;
    frontApp?: any;
}