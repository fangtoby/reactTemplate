//要想提高性能，需要按需加载
import Immutable from 'immutable'
import {
    LOGIN_START, 
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../Actions/Login'

//登录页
const loginState = {
}

const login = (state = loginState, action = {}) => {
    switch(action.type){
        case LOGIN_START:
            return {...state,...action.data};
        case LOGIN_SUCCESS:
             return {...state,...action.data};
        case LOGIN_ERROR:
             return {...state,...action.data};
        default:
            return state;
    }
}

export default login