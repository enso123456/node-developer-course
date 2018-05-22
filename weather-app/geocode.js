const request = require('request')

module.exports.geocodeAddress = (value, cb) => {
	const encodedAddress = encodeURIComponent(value)

	request({
		url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (err, response, body) => {
		if (err) {
			cb('Unable to connect to google servers')
		} else if (body.status === "ZERO_RESULTS") {
			cb("Cannot find address.")
		} else if (body.status === "OK"){
			cb(null, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng,
			})
		}
	})
}


