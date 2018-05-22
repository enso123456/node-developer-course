const fs = require('fs')

// refactor
const fetchNotes = () => {
	try {
		const noteString = fs.readFileSync('notes-data.json')
		return JSON.parse(noteString)
	} catch(e) {
		return []
	}
}

const saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
	let notes = fetchNotes()
	const note = {
		title,
		body
	}

	const checkNotesDups = notes.filter(note => note.title === title)

	if (checkNotesDups.length === 0) {
		notes.push(note)
		saveNotes(notes)
		return note
	}
}

const getNotes = () => {
	return fetchNotes()
}

const readNote = (title) => {
	const notes = fetchNotes()
	const filterNotes = notes.filter(note => note.title === title)
	return filterNotes[0]
}

const removeNote = (title) => {
	const notes = fetchNotes()
	const filterNotes = notes.filter(note => note.title !== title)
	saveNotes(filterNotes)
	return notes.length !== filterNotes.length
}

const logNote = (note) => {
	console.log("--")
	console.log(`Title: ${note.title}`)
	console.log(`Body: ${note.body}`)
}

module.exports = {
	addNote,
	getNotes,
	readNote,
	removeNote,
	logNote
}