import React, {Component, PropTypes} from 'react';
//载入react dom渲染模块
import ReactDOM, {render} from 'react-dom';

import Input from './From/Input'

import Select from "./From/Select";

import Button from './From/Button'

import {Template} from './Common/Index';

import Layout from './Layout/Layout/'

class Content extends Component{
	constructor(props){
		super(props)
		this.state = {
			loginStatus: 'Login',
			username: {
				value: '',
				error: false,
				errorMessage: 'can not be empty'
			},
			password: {
				value: '',
				error: false,
				errorMessage: 'can not be empty'
			},
			selectList: {
				value: '',
				error: false,
				errorMessage: 'can not be empty'
			},
			selectNode: [{
				id: 1,
				text: 'fangyanliang'
			},{
				id: 2,
				text: 'shenqiong'
			},{
				id: 3,
				text: 'jingjing'
			},{
				id: 4,
				text: 'pengpeng'
			},{
				id: 5,
				text: 'yanzi'
			},{
				id: 6,
				text: 'fangjiasheng'
			},{
				id: 7,
				text: 'xuyingxia'
			}]
		}
		this.onChange = ({target,value}) =>{
			let item = {}
			this.setState({ [target]:{ 
				...this.state.password, 
				value: value,
				error: value == '' ? true:false
			}})
		}
		this.submit = (e) => {
			// // object.keys( this.state )
			// console.log( this.props)
			// console.log( this.state )
			const post = {
				username:this.state.username.value,
				password:this.state.password.value,
				type: this.state.selectList.value
			}
			this.setState({
				loginStatus:'Loading...'
			})
			this.props.actions.Login.login('/dbserver/get/user', post ,(result)=>{
				console.log( result )
				if(result == 'success'){
					this.setState({
						loginStatus:'Login'
					})
				}else{
					this.setState({
						loginStatus:'Login'
					})
				}
			})
		}

	}
	componentDidMount(){

	}
	render(){
		return (
			<Layout>
				<div className="header">
					<div className="right_top_border"></div>
					<div className="left_botton_border"></div>
					<h1 className="logo_title">
						ZA Web Frontend
					</h1>
				</div>
				<div className="item_block">
					<Input 
					label=""
					type="text" 
					value={this.state.username.value}
					onChange={ value => {
						this.onChange({
							target: 'username',
							value: value
						})
					}}
					placeholder="please input username" 
					isRequire={false}
					error={this.state.username.error}
					errorMessage={this.state.username.errorMessage} 
					privatestyle={{width:'215px'}}/>

					<Input 
					label=""
					type="password" 
					value={this.state.password.value}
					onChange={ value => {
						this.onChange({
							target: 'password',
							value: value
						})
					}}
					placeholder="Please Input Password" 
					isRequire={false}
					error={this.state.password.error}
					errorMessage={this.state.password.errorMessage}
					privatestyle={{width:'215px'}}/>

					<Select 
					data={this.state.selectNode} 
					onSeletedEvent={({id,text})=>{
						this.onChange({
							target: 'selectList',
							value: id
						})
					}} 
					privatestyle={{width:'215px',margin:'0 auto'}} />
				</div>
				<div className="item_block bottom_box">
					<Button iconClass="icon iconfont icon-commentfill" bindClick={this.submit.bind(this)}>
						{this.state.loginStatus}
					</Button>
					<Button >
						Click Me! (0)
					</Button>
					<Button iconClass="icon iconfont icon-friend_add_light" theme="grey">
						Click Me! (1)
					</Button>
					<Button iconClass="icon iconfont icon-refresh_light" theme="write">
						Click Me! (2)
					</Button>
				</div>
				<div className="item_block">
					<span id="for_id">
						for id text
					</span>
					<span className="for_class">
						for class text
					</span>
					<span className="for_class ">
						for class text
					</span>
					<span className="for_class_01">
						for class text
					</span>
					<span className="for_class_01 hello">
						for class text
					</span>
					<span className="testClass for_class_01 hello">
						for class text
					</span>
					<span className="testClass">
						for class text
					</span>
				</div>
			</Layout>
		)
	}
}

export default Template({
	id: 'Content',
	component: Content,
	url:''
});
