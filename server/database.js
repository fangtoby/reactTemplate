let mysql = require('mysql')
let config = require('./config')

var pool = mysql.createPool(config.mysql_dev)

module.exports = {
	pool: pool
}