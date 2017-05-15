var mockjs = require('mockjs');

module.exports = {
	api: '/api/login',
	type: 'POST', //post get
	response: function(req, res) {
		res.json(mockjs.mock({
			status: 'ok',
			message: 'login success'
		}))
	}
}