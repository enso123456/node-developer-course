const request = require('request')

const geocodeAddress = (address) => {
	const encodedAddress = encodeURIComponent(address)
	return new Promise((resolve, reject) => {
		request({
			url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
			json: true
		}, (err, response, body) => {
			if (err) {
				reject('Unable to connect to google servers')
			} else if (body.status === "ZERO_RESULTS") {
				reject("Cannot find address.")
			} else if (body.status === "OK"){
				resolve({
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng,
				})
			}
		})
	})
	
}

geocodeAddress('cebu').then(res => {
	console.log(`Address: ${res.address}`)
	console.log(`Latitude: ${res.latitude}`)
	console.log(`Longitude: ${res.longitude}`)
})

