import fs from 'fs';
import path from 'path';
import "reflect-metadata";
import RenderReactDomAsString from './RenderReactDomAsString';

const __STATICS_DIR = path.resolve(__dirname, '..', '..', '..', 'public', 'statics');

export const React = (args: {App: any; layout: string;}): ClassDecorator => {
    return (target: any) => {
        const data: ReactDataInterface = {
            App: args.App,
            layout: args.layout,
            statics: {
                styles: [],
                scripts: []
            },
            renderAsString: RenderReactDomAsString,
        };
        const staticsFiles: string[] = fs.readdirSync(__STATICS_DIR);
        if (staticsFiles.length > 0) {
            staticsFiles.forEach(file => {
                if (path.extname(file) === '.js') data.statics.scripts.push(`/statics/${file}`);
                if (path.extname(file) === '.css') data.statics.styles.push(`/statics/${file}`);
            })
        } else throw new Error("Static files directory not found.");

        Reflect.defineMetadata('react', data, target);
    }
}

export interface ReactDataInterface {
    App: any,
    layout: string,
    statics: { styles: string[]; scripts: string[] },
    renderAsString: any;
}