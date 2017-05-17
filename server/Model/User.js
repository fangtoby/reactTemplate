let db = require('../database')
let _ = require('underscore')

let User = function(argument) {
	// body...
}

User.prototype.find = (id, callback) => {
	let sqlString = "select * from user where id = ?"

	db.pool.getConnection((err, connection) => {
		if (err) {
			callback(true, err)
			return
		}
		connection.query(sqlString, [id], (err, results) => {
			if (err) {
				callback(true, err)
				return
			}
			callback(false, results)
		})
	})
}

module.exports = User