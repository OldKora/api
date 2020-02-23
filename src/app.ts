import 'reflect-metadata';
import Application from './lib/Application';

class App extends Application {

    constructor(appInit: { port: any; host: string; middleWares: any; controllers: any; apiControllers: any}) {
        super(appInit);
    }
}

export default App;