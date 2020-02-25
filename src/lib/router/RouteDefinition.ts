export interface RouteDefinition {
    path: string;
    requestMethod: 'get' | 'post' | 'delete' | 'put';
    methodName: string | symbol;
    options: RouteOptionsDefinition;
}

export interface RouteInterface {
    path: string;
    method: 'get' | 'post' | 'delete' | 'put';
    paramsType?: ParamsType[]
}

export interface RouteOptionsDefinition {
    template?: string;
    paramsType?: ParamsType[];
}

export interface ParamsType {
    name: string;
    type: 'string' | 'number';
}

export const parseParam = (paramName: string, paramValue: any, expectedType: string) => {
    switch(expectedType) {
        case 'string':
            if (!isNaN(paramValue)) {throw new Error(`Request paramter [${paramName}] must be type of ${expectedType}, number passed.`);}
            else return ''+ paramValue;
        case 'number':
            if (isNaN(paramValue)) {throw new Error(`Request paramter [${paramName}] must be type of ${expectedType}, string passed.`);}
            else return Number(paramValue);
    }
}