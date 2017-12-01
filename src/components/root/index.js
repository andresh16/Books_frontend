import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import Routes from '../router';
import DevTools from '../../components/devTools/component';

const Root = props => {
    return (
        <Provider store={props.store}>
            <Router>
                <div>
                    <Routes/>
                    {props.children}
                    <DevTools />
                </div>
            </Router>
        </Provider>
    )
};

export default Root