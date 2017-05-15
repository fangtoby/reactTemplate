import fetch from 'isomorphic-fetch'
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

import  {Tool} from '../../Config/Tools'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const login = (url,postData,callback) => {
	 return dispatch => {
        return Tool.ajax_request('POST', url, postData, json => {
            if(json.status == 'ok'){
            	callback && callback('success')
                // dispatch(loginSuccessAction(json))
            }else{
                // dispatch(loginFailureAction(json))
            	callback && callback('failure')
            }
        }, error => {
            console.log( error )
        })
    }
} 