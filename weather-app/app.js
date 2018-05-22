const yargs = require('yargs')
const geocode = require('./geocode')

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

geocode.geocodeAddress(argv.a, (errMsg, response) => {
	if (errMsg) {
		console.log(errMsg)
	} else {
		console.log(`Address: ${response.address}`)
		console.log(`Latitude: ${response.latitude}, Longitude: ${response.longitude}`)
	}
})
