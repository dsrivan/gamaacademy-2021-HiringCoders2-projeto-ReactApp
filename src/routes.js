import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Repositories from './pages/Repositories';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/repositories' component={Repositories} />
                <Route path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}