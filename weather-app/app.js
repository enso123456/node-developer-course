const yargs = require('yargs')
const geocode = require('./geocode')
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

geocode.geocodeAddress(argv.a, (errMsg, address) => {
	if (errMsg) {
		console.log(errMsg)
	} else {
		forecast.getWeather(address.latitude, address.longitude, (err, temperature) => {
			if (!err) {
				console.log(`Address: ${address.address}`)
				console.log(`It's currently : ${temperature}`)
			} else {
				console.log(errMsg)
			}
		})
	}
})
