import * as config from './Config';

const {target} = config;

export const Tool = {};

Tool.paramType = data => {
    let paramArr = []; 
    let paramStr = ''; 
    for (let attr in data) {
        if(Object.prototype.toString.call(data[attr]) == '[object Array]'){
            paramArr.push(attr+'[]' + '=' + data[attr]+'');
        }else{
            paramArr.push(attr + '=' + data[attr]);
        }
    }
    paramStr = paramArr.join('&');
    paramStr = '?' + paramStr;
    return paramStr
}


/**
* ajax request
*/
Tool.ajax_request = (type = 'GET', path = '', param = {}, success = (json) => {}, failure = (json) => {}) => {
    if(type == 'GET'){
        return Tool.ajax_get(path, param, success, failure)
    }else if(type == 'DELETE'){
        return Tool.ajax_delete(path, param, success, failure)
    }else{
        return Tool.ajax_post(path, param, success, failure)
    }
}
/**
* ajax get
*/
Tool.ajax_get = (path = '', param = {}, success = (json) => {}, failure = (json) => {}) => {
    let url = target + path +  Tool.paramType(param);
    return fetch(url,{
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => response.json())
    .then((json) => {
        if(json.code && json.code == "500"){
            // Tool.global_message('网络服务错误，错误码: 500',3000)
        }
        if(json.code && json.code == -100){
            // Tool.rediractToLogin('登录超时，即将为您跳转到登录页！',3000);
        }else{
            success && success(json);
        }
    })
    .catch((error) => {
       failure && failure(error)
       // Tool.global_message('网络服务错误，错误码: 500',3000)
    })
}
/**
* ajax post
*/
Tool.ajax_post = (path = '', param = {}, success = (json) => {}, failure = (json) => {}) => {
    let url = target + path;
    return fetch(url,{
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(param)
    })
    .then(response => response.json())
    .then((json) => {
        if(json.code && json.code == "500"){
            // Tool.global_message('网络服务错误，错误码: 500',3000)
        }
        if(json.code && json.code == -100){
            // Tool.rediractToLogin('登录超时，即将为您跳转到登录页！',3000);
        }else{
            success && success(json);
        }
    })
    .catch((error) => {
       failure && failure(error)
       // Tool.global_message('网络服务错误，错误码: 500',3000)
    })
}
/**
* ajax delete
*/
Tool.ajax_delete = (path = '', param = {}, success = (json) => {}, failure = (json) => {}) => {
    let url = target + path +  Tool.paramType(param);
    return fetch(url,{
        method: 'DELETE',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => response.json())
    .then((json) => {
        if(json.code && json.code == -100){
            // Tool.rediractToLogin('登录超时，即将为您跳转到登录页！',3000);
        }else{
            success && success(json);
        }
    })
    .catch((error) => {
       failure && failure(error)
       // Tool.global_message('网络服务错误，错误码: 500',3000)
    })
}