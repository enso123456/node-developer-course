const request = require('request')

request({
	url: 'http://maps.googleapis.com/maps/api/geocode/json?address=cebu',
	json: true
}, (err, response, body) => {
	console.log(JSON.stringify(response, undefined, 2))
})