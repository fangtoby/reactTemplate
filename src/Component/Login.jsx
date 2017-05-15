import React, {Component, PropTypes} from 'react';
//载入react dom渲染模块
import ReactDOM, {render} from 'react-dom';

import {Template} from './Common/Index';

import Layout from './Layout/Layout/'

class Login extends Component{
	constructor(props){
		super(props)

	}
	componentDidMount(){
		
	}
	render(){
		return (
			<Layout >
				<span>Hello</span>
			</Layout>
		)
	}
}

export default Template({
	id: 'Login',
	component: Login,
	url:''
});
