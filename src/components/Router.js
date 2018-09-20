import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from '../App';
import Singleseries from './Singleseries';

class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={ App } exact />
                    <Route path="/series/:id" component={ Singleseries } />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;