const db = require('./db')

module.exports.addUser = (name, age) => {
	db.save(name, age)
}