import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Menu from './pages/Menu';
import Categorias from './pages/Categorias';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/menu" exact component={Menu}/>
                <Route path="/categorias" exact component={Categorias}/>
            </Switch>
        </BrowserRouter>
    );
}