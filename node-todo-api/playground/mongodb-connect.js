const mongoose = require("mongoose");
const validator = require('validator')

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/TodoApp", (err, db) => {
	if (err) {
		console.log('Unable to connect MongoDB database')
	}
})

const Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		default: false,
	},
	completedAt: {
		type: Number,
		default: null
	}
})

// const newTodo = new Todo({
// 	text: 'Wash Laundry'
// })

// newTodo.save().then((doc) => {
// 	console.log('Saved Todo', doc)
// }, (e) => {
// 	console.log('Unable to save todo')
// })

const User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: '{VALUE} is not valid email'
		}
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	tokens: [{
		access: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	}]
})

const newUser = new User({
	email: 'john@doe.com'
})

newUser.save().then((res) => {
	console.log('User saved', res)
}, (err) => {
	console.log('Unable to save user', e)
})

