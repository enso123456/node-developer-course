const axios = require('axios')
const yargs = require('yargs')
const forecast = require('./forecast')

const argv = yargs
	.options({
		a: {
			demandOption: true,
			alias: 'address',
			describe: "Address",
			string: true
		}
	})
	.help()
	.argv

const encodedAddress = encodeURIComponent(argv.address)

const geocodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

const SECRET_KEY = 'bbedf1064cb449519e1be341faf2f9bf'


axios.get(geocodeURL)
	.then(response => {
		if (response.status === "OVER_QUERY_LIMIT") {
			throw new Error(response.data.error_message)
		}
		console.log(`Address: ${response.data.results[0].formatted_address}`)
		
		const lat = response.data.results[0].geometry.location.lat
		const lng = response.data.results[0].geometry.location.lng
		const forecastURL = `https://api.darksky.net/forecast/${SECRET_KEY}/${lat},${lng}`

		return axios.get(forecastURL)
	})
	.then(response => {
		const temperature = response.data.currently.temperature
		console.log(`It's currently : ${temperature}`)
	})
	.catch(errMessage => {
		console.log(errMessage)
	})


