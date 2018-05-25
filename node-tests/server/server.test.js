const request = require('supertest')
const chai = require('chai')

const expect = chai.expect
const app = require('./server').app


describe('SERVER', () => {
	describe("/", () => {
		it('should return hello world', (done) => {
			request(app)
				.get('/')
				.expect(200)
				.expect('hello world')
				.end(done)
		})
	})

	describe("/user", () => {
		it('should return a firstname and lastname', (done) => {
			request(app)
				.get('/user')
				.expect(200)
				.expect((res) => {
					expect(res.body)
						.to.be
						.include({
							firstName: 'Romeo',
							lastName: 'Enso'
						})
						.a('object')
				})
				.end(done)
		})
	})
})