import React, {Component, PropTypes} from 'react';
//载入react dom渲染模块
import ReactDOM, {render} from 'react-dom';

import { Link } from 'react-router-dom';

const Footer = () =>{
	return <div className='frame_footer clearfix'>
			<span>&copyright; 2017 dot.f|fangtoby@live.cn</span>
	</div>
}

export default Footer