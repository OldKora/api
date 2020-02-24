import 'reflect-metadata';
import Application, { ArgsInterface } from './lib/Application';

class App extends Application {

    constructor(appInit: ArgsInterface) {
        super(appInit);
    }
}

export default App;