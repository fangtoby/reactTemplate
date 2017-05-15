import React,{Component, Proptypes} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const ButtonComponent = props => {
	let theme = `button button_${props.theme}_theme`

	return <a href="javascript:void(0)" 
		className={ theme } 
		onClick={ e => props.bindClick() }>
			<i className={props.iconClass}></i><span>{props.children}</span>
	</a>
}

ButtonComponent.propTypes = {
	theme: PropTypes.oneOf([
		'blue',
		'grey',
		'write'
		])
}
ButtonComponent.defaultProps = {
	theme: 'blue',
	bindClick: e => {},
	iconClass: 'icon_unvisible'
}
export default ButtonComponent