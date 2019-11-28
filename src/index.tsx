import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Main from './Modules/Main/Pages/Main';
import store from './Store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Main} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
