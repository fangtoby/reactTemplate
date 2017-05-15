import React, {Component, PropTypes} from 'react';
//载入react dom渲染模块
import ReactDOM, {render} from 'react-dom';

import { Link } from 'react-router-dom';

import Footer from '../Footer/'

import Header from '../Header/'

import Content from '../Content/'

const Layout = (props) =>{
	return <div className='frame_layout'>
			<Header />
				<Content >
					{ props.children }
				</Content>
			<Footer />
	</div>
}

export default Layout