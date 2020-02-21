export interface RouteDefinition {
    path: string;
    requestMethod: 'get' | 'post' | 'delete' | 'put';
    methodName: string | symbol;
    params?: ParamsType[];
}

export interface RouteInterface {
    path: string;
    method: 'get' | 'post' | 'delete' | 'put';
    paramsType?: ParamsType[]
}

export interface ParamsType {
    name: string;
    type: 'string' | 'number';
}