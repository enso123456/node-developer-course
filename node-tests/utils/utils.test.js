const util = require('./utils')

it('should add both number', () => {
	var res = util.add(3, 5)

	if (res != 8) {
		throw new Error("Expected 8, but got " + res)
	}
})

it('should square a number', () => {
	var res = util.square(3)

	if (res != 9) {
		throw new Error("Expected 9, but got " + res)
	}
})