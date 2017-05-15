import Immutable from 'immutable'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import login from './Login'

export default combineReducers({
  login,
})