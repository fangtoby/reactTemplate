import React, {Component, PropTypes} from 'react';
//载入react dom渲染模块
import ReactDOM, {render} from 'react-dom';

import {Provider} from 'react-redux';

import route from './Router/Route'; //路由配置

import store from './Redux/Store/Store';
//基本样式
import './Style/base.less';
//图标库
import './Style/iconfont/iconfont.css'


store.subscribe(() => { //监听state变化
	if(process.env.NODE_ENV !== 'production'){
    	console.log(store.getState())
    }
});

render(
	<Provider store={store}>
        {route}
    </Provider>,document.querySelector('#app'))
