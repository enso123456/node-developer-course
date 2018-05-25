const chai = require('chai')
const expect = chai.expect
const util = require('./utils')


it('should add both number', () => {
	var res = util.add(3, 5)

	expect(res).to.be.a('number')
})

it('should square a number', () => {
	var res = util.square(3)

	if (res != 9) {
		throw new Error("Expected 9, but got " + res)
	}
})

it ('should verify display first and last name are set', () => {
	const userObj = {
		firstName: 'Romeo',
		lastName: 'Enso',
		age: 24
	}
	const res = util.setName(userObj, "Romeo Enso")

	expect(res)
		.to.be
		.include({ firstName: 'Romeo', lastName: 'Enso'})
		.a('object')
})