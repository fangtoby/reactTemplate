import React, {Component, PropTypes} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Bundle from './bundle';

// 导入search组件，需要在路径前面加上 bundle-loader?lazy!
import ContentContainer from 'bundle-loader?lazy&name=Component.[name]!../Component/Content';

import LoginContainer from 'bundle-loader?lazy&name=Component.[name]!../Component/Login'

const Content = () => (
    <Bundle load={ContentContainer}>
        {(Content) => <Content />}
    </Bundle>
)

const Login = () => (
    <Bundle load={LoginContainer}>
        {(Login) => <Login />}
    </Bundle>
)


const RouteConfig = (
    <Router>
        <div className="router-frame">
            <Route path="/" exact component={Content} />
            <Route path="/index" component={Content} />
            <Route path="/login" component={Login} />
        </div>
    </Router>
);

export default RouteConfig;