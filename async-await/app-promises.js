const users = [{
	id: 1,
	name: "Romeo",
	schoolId: 101
}, {
	id: 2,
	name: "John",
	schoolId: 102
}]

const grades = [{
	id: 1,
	schoolId: 101,
	grade: 86
},{
	id: 2,
	schoolId: 102,
	grade: 86
},{
	id: 3,
	schoolId: 102,
	grade: 92
}]


const getUser = (id) => {
	return new Promise((resolve, reject) => {
		const user = users.find(user => user.id === id)
		if (user) {
			resolve(user)
		} else {
			reject(`Unable to find user with the id of ${id}.`)
		}
	})
}

const getGrades = (schoolId) => {
	return new Promise((resolve, reject) => {
		resolve(grades.filter(grade => grade.schoolId === schoolId))
	})
}

const getStatus = (userId) => {
	let user
	return getUser(userId).then((userObj) => {
		user = userObj
		return getGrades(user.schoolId)
	}).then((grades) => {
		let average = 0

		if (grades.length > 0) {
			average = grades.map((grade) => grade.grade).reduce((a, b) => {
				return a + b
			}) / grades.length
		}
		return `${user.name} has a ${average}% in the class`
	})
}

getStatus(2).then((status) => {
	console.log(status)
}).catch((e) => {
	console.log(e)
})

getGrades(102).then((grades) => {
	console.log(grades)
}).catch(e => console.log(e))