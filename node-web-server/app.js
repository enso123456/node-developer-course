const express = require('express')
const path = require('path')
const hbs = require('hbs')
const fs = require('fs')
const app = express()

const port = process.env.PORT || 3000

hbs.registerPartials(path.join(__dirname,'views/partials'))
app.set('view engine', 'hbs')

app.use((req, res, next) => {
	const now = new Date().toString()

	const log = `${now}: ${req.url}`

	fs.appendFile('system.log', log + '\n', (err) => {
		if (err) {
			console.log('Unable to write in system.log')
		}
	})
	next()
})

app.use((req, res, next) => {
	res.render('maintenance')
})

app.use('static', express.static(path.join(__dirname, 'public')))

//helpers 
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
})
hbs.registerHelper('sayIt', (text) => {
	return text.toUpperCase()
})


app.get('/', (req, res) => {
	res.render('index', {
		titlePage: 'Homepage',
		welcome_message: "Hello World"
	})
})

app.get('/about', (req, res) => {
	res.render('about', {
		titlePage: 'About',
		welcome_message: "About Page"
	})
})


app.listen(port, () => {
	console.log('Server is up on port 3000.')
})