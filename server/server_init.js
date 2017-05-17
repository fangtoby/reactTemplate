var express = require('express')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser');
var User = require('./User')

var server = express()

server.use(bodyParser.urlencoded({
	extended: false
}));

server.use(bodyParser.json());


server.post('/dbserver/get/user', (req, res) => {
	var user = new User()
	var userid = req.body.uid
	user.find(userid, (err, result) => {
		if (err) {
			res.json({
				status: false,
				message: 'not found'
			})
		}
		res.json(result)
	})
})


server.listen(9999, (param) => {
	console.log(' server runing at port 9999.')
})