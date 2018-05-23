const request = require('request')

const SECRET_KEY = 'bbedf1064cb449519e1be341faf2f9bf'

const getWeather = (lat, lng, cb) => {
	request({
		url: `https://api.darksky.net/forecast/${SECRET_KEY}/${lat},${lng}`,
		json: true
	}, (err, response, body) => {
		if (!err && response.statusCode === 200) {
			cb(null, body.currently.temperature)
		} else {
			cb('Unable to connect to forecast.io server')
		}
	})
}

module.exports.getWeather = getWeather