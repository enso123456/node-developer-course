const asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b)
		} else {
		 	reject('Must be a number')
		}
	})
}

asyncAdd(1, 4).then(res => {
		console.log('Sum ', res)
	})
	.catch(err => console.log(err))

// const somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('it works')
// 		reject('err work')
// 	}, 2500)
// })

// somePromise
// 	.then(resp => console.log(`Success: ${resp}`), err => console.log(`Error: ${err}`))
