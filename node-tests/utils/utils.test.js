const chai = require('chai')
const expect = chai.expect
const util = require('./utils')

describe("UTILS", function() {

	describe("#computation", () => {
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
	})

	describe("#object comparison", () => {
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
	})

	describe("#async", () => {
		it('async call square', (done) => {
			util.squareAsync(9, result => {
				expect(result).to.be.equal(81)
				done()
			})
		})
	})
})
