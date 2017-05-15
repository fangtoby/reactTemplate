import React, {Component, PropTypes} from 'react';
//载入react dom渲染模块
import ReactDOM, {render} from 'react-dom';

class Input extends Component{
	constructor(props){
		super(props)
		this.state = {

		}
		this.onChange = (e) => {
			if(this.props.onChange)
				this.props.onChange(e.target.value)
		}
		this.onFocus = (e) => {
			if(this.props.onFocus)
				this.props.onFocus()
		}
	}
	render(){
		return (
			<div className="za_input_block">
				<label>
					<i className={ this.props.isRequire ? 'is_require': 'no_require'}>
					</i>
					{
						this.props.label == '' ? null:<span className="input_label">{this.props.label}</span>
					}
					<input 
						type={this.props.type}
						placeholder={this.props.placeholder}
						value={this.props.value}
						onChange={this.onChange.bind(this)} 
						onFocus={this.onFocus.bind(this)} 
						style={ this.props.privatestyle }
						/>
				</label>
				<span className="input_error" >
					{this.props.error ? this.props.errorMessage : ''}
				</span>
			</div>
		)
	}
}

Input.defaultProps = {
  isRequire: false,
  error: false,
  errorMessage: '',
  label: '',
  type: 'text',//text password 
  placeholder: 'please input ...',
  value: ''
}

export default Input