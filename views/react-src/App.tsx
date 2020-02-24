import * as React from 'react';
import HomePage from './components/HomePage';

const App = (props : any) => {
    return <HomePage name={props?.assets?.name} />
}

export default App;