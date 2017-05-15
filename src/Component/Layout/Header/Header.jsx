import React, {Component, PropTypes} from 'react';
//载入react dom渲染模块
import ReactDOM, {render} from 'react-dom';


import { Link } from 'react-router-dom';

const Header = () =>{
	return <div className='frame_header clearfix'>
			<div className='header-left'>
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/index" >Home</Link>
					</li>

				</ul>
			</div>
			<div className='header-right'>
			</div>
	</div>
}

export default Header