import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch, withRouter
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Login from './containers/Login';
import Admin from './containers/Admin';
import allReducers from './reducers/rootReducers';


let store = createStore(allReducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router >
                <Switch >
                    <Route exact path="/" component={Login} />
                    <Route path="/admin" component={Admin} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
