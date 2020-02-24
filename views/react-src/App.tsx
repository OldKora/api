import * as React from 'react';
import HomePage from './components/HomePage';
import {Route} from 'react-router-dom';
import AboutPage from './components/AboutPage';

const App = (props : any) => {
    return (
        <>
            <Route exact path="/" render={() => <HomePage name={props?.assets?.data?.name} />} />
            <Route path="/about" render={() => <AboutPage {...props?.assets?.data?.about} /> } />
        </>
    )
}

export default App;