import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home'
import Consultar from './Components/Consultar/Consultar';
import Votar from './Components/Votar/Votar';

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/consultar/:dni" component={Consultar} />
            <Route exact path="/votar" component={Votar} />
        </Switch>
    )
}

export default AppRoutes
