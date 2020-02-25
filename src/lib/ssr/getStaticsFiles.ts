import fs from 'fs';
import path from 'path';

const __STATICS_DIR = path.resolve(__dirname, '..', '..', '..', 'public', 'statics');

export const getStaticsFiles = (): any => {
    const staticsFiles: any = {
        styles: [],
        scripts: []
    };
    const files: string[] = fs.readdirSync(__STATICS_DIR);
    if (files.length > 0) {
        files.forEach(file => {
            if (path.extname(file) === '.js') staticsFiles.scripts.push(`/statics/${file}`);
            if (path.extname(file) === '.css') staticsFiles.styles.push(`/statics/${file}`);
        })
    } else throw new Error("Static files directory not found.");
    return staticsFiles;
}