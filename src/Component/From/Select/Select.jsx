import React,{Component, Proptypes} from 'react';
import ReactDOM from 'react-dom';
import './Style.less'

class Select extends Component{
	constructor(){
		super()
		this.state = {
			status: false,
			value: '',
			seletedId: null
		}
		this.onFocus = (event) => {
			this.setState({
				status: true
			})
		}
		this.onSeleted = (event)=>{
			const target = event.target

			this.setState({
				status: false,
				value: target.getAttribute('data-value'),
				seletedId: target.getAttribute('data-id')
			})
			this.props.onSeletedEvent({
				id: target.getAttribute('data-id'),
				text: target.getAttribute('data-value')
			})
		}
		this.handleTouchOutside = (event) => {
			if (this.refs.select_component_target && 
				!this.refs.select_component_target.contains(event.target)) {
				this.setState({
					status: false
				})
			}
		}
	}
	
	componentWillUpdate(nextProps, nextState){
		if(nextState.status == true){
			if (!document.addEventListener && document.attachEvent) {
				document.attachEvent('onclick', this.handleTouchOutside);
			} else {
				document.addEventListener('click', this.handleTouchOutside);
			}
		}else{
			if (!document.removeEventListener && document.detachEvent) {
				document.detachEvent('onclick', this.handleTouchOutside);
			} else {
				document.removeEventListener('click', this.handleTouchOutside);
			}
		}
	}
	componentWillUnmount(){
		if (!document.removeEventListener && document.detachEvent) {
			document.detachEvent('onclick', this.handleTouchOutside);
		} else {
			document.removeEventListener('click', this.handleTouchOutside);
		}
	}
	componentDidMount(){
		if(this.props.defaultId != '' && this.props.defaultText != ''){
			this.setState({
				seletedId: this.props.defaultId,
				value: this.props.defaultText
			})
		}
	}
	render(){
		const {seletedId,value} = this.state;
		return (
			<div className={this.state.status ? "za_select_component select_active":"za_select_component"} ref='select_component_target' style={ this.props.privatestyle }>
				<div className="za_select_input">
					<input value={this.state.value} type="text" placeholder="请选择"  readOnly="readonly"  onFocus={this.onFocus.bind(this)} />
				</div>
				<i className="icon iconfont icon-unfold"></i>
				<i className="icon iconfont icon-fold"></i>
				{
					this.state.status ? <div className="za_select_content" >
						<ul>
							{
								this.props.data.map((value,index,array) =>{
									if(seletedId != null && seletedId == value['id']){
										return <li key={value['id']} onClick={ this.onSeleted.bind(this) } data-id={value['id']} data-value={value['text']} className="isSeleted"> { value['text'] } </li> 
									}else{
										return <li key={value['id']} onClick={ this.onSeleted.bind(this) } data-id={value['id']} data-value={value['text']}> { value['text'] } </li> 
									}
								})
							}
						</ul>
					</div>:null
				}	
			</div>
		)
	}
}


Select.propTypes ={
}

Select.defaultProps = {
	defaultId: 0,
	defaultText: '',
	privatestyle: {
		width: '200px'
	}
}


export default Select

