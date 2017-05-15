/**
 * 前端接口调试服务
 *
 * @Run: npm run mock
 * @Author: fangtoby@live.cn
 * @Created: 2017-04-21
 *
 */
var express = require('express');
var fs = require('fs');
var path = require('path');
var color = require('colors-cli');
var server = express();
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({
	extended: false
}));
server.use(bodyParser.json());

var config = {
	timeout: 3000,
	path: './mock',
	port: 8090

}
var mockDir = path.resolve(__dirname, config.path);

function renderLog(req, res) {
	// body...
	console.log("------------------:" + new Date().toUTCString());
	console.log("")
	console.log(req.url);
	console.log('body:');
	console.log(req.body);
	console.log('query:')
	console.log(req.query)
	console.log('params:')
	console.log(req.params)
	console.log('header:')
	console.log(req.headers)
	console.log("")
	console.log("------------------:" + new Date().toUTCString());
}

function routerDefined(config) {
	if (config.type == 'GET') {
		server.get(config.api, function(req, res) {
			setTimeout(() => {
				config.response(req, res);
				renderLog(req, res);
			}, config.timeout)
		})
	} else if (config.type == 'POST') {
		server.post(config.api, function(req, res) {
			setTimeout(() => {
				config.response(req, res);
				renderLog(req, res);
			}, config.timeout)
		})
	} else {
		server.all(config.api, function(req, res) {
			setTimeout(() => {
				config.response(req, res);
				renderLog(req, res);
			}, config.timeout)
		})
	}
}

function getTypeString(obj) {
	return Object.prototype.toString.call(obj);
}

// 文件修改，自动生成接口
// chokidar.watch(mockDir).on('change',function(){
// 	console.log('files change')
// 	startServer();
// })

fs.readdirSync(mockDir).forEach(function(file) {
	var mock = require(path.resolve(mockDir, file));
	if (getTypeString(mock) == '[object Object]') {
		routerDefined(mock);
	} else if (getTypeString(mock) == '[object Array]') {
		for (var i = mock.length - 1; i >= 0; i--) {
			routerDefined(mock[i]);
		}
	}
})

server.listen(config.port, function(argument) {
	console.log('mockjson server: ' + color.red('http://localhost:' + config.port))
	console.log('status: ' + color.red('open'))
});