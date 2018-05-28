const axios = require('axios')

// USD PHP 51
// 1 USD is worth PHP 51

// getExchangeRate
// @param (from, to)
// return rates[to]

const getExchangeRate = async (from, to) => {
	try {
		const resp = await axios.get(`https://exchangeratesapi.io/api/latest?&base=${from}`)
		const rate =  resp.data.rates[to]	

		if (rate) {
			return rate
		} else {
			throw new Error() // call the error below
		}
	} catch (e) {
		throw new Error (`Unable to get exchange for ${from} and ${to}`)
	}
	
}


// getCountries
// @param currencyCode
const getCountries = async (currencyCode) => {
	try {
		const resp = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
		return resp.data.map(country => country.name)
	} catch (e) {
		throw new Error(`Unable to get currency code ${currencyCode}`)
	}

}

// convertCurrency 
// @param (from, to, amount)
// exchangeRate = amount * rate
// return map country name

const convertCurrency = (from, to, amount) => {
	return getCountries(to).then(tempCountry => {
		return getExchangeRate(from, to)
	}).then((rate) => {
		let exchangeRate = amount * rate

		return `${amount} ${from} is worth ${exchangeRate} ${to}`
	})
}

const convertCurrencyAlt = async (from, to, amount) => {
	const country = await getCountries(to)
	const rate = await getExchangeRate(from, to)

	let totalRate = amount * rate

	return `${amount} ${from} is worth ${totalRate} ${to}`
}


convertCurrencyAlt('USD', 'PHP', 100).then(resp => {
	console.log(resp)
}).catch(e => console.log(e.message))
