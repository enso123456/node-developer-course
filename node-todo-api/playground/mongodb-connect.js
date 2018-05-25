const mongoose = require("mongoose");


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
		minlength: 1
	}
})

const newUser = new User({
	email: 'john@doe.com'
})

newUser.save().then((res) => {
	console.log('User saved', res)
}, (err) => {
	console.log('Unable to save user', e)
})

