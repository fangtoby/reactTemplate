import React, {Component, PropTypes} from 'react';
//载入react dom渲染模块
import ReactDOM, {render} from 'react-dom';

import { Link } from 'react-router-dom';

const Content = (props) =>{
	return <div className="content">
			{props.children}
	</div>
}

export default Content