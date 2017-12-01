import React from 'react';
import {Route} from 'react-router';
import Home from '../home';
import Menu from '../menu/menuComponent';
import AdminBooks from '../adminBooks/adminBooks';

const RouterRender = props => {
    return (
        <div>
            <Menu/>
            <Route path="/Home" component={Home}/>
            <Route path="/AdminBooks" component={AdminBooks}/>
        </div>
    )
};
export default RouterRender