const _ = require('lodash')
const yargs = require('yargs')
const notes = require('./notes')

const titleOptions = {
	describe: "Title of a note",
	demand: true,
	alias: 't'
}

const bodyOptions = {
	describe: "Body of a note",
	demand: true,
	alias: 'b'
}

const argv = yargs
	.command('add', 'Add a note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List of notes')
	.command('read', 'Read a note', { title: titleOptions })
	.command('remove', 'Remove a note', { title: titleOptions })
	.help()
	.argv

const command = argv._[0] // get the command

if (command === "add") {
	const note = notes.addNote(argv.title, argv.body)
	if (_.isEmpty(note)) {
		console.log('Title in used.')
	} else {
		console.log("Note saved.")
		notes.logNote(note)
	}
} else if (command === "list") {
	const allNotes = notes.getNotes()
	console.log(`Printing notes list: ${allNotes.length}`)
	allNotes.forEach(note => notes.logNote(note))
} else if (command === "read") {
	const note = notes.readNote(argv.title)
	if (note) {
		console.log("Note was found.")
		notes.logNote(note)
	} else {
		console.log("Note not found.")
	}
} else if (command === "remove") {
	const notesRemoved = notes.removeNote(argv.title)
	const message = notesRemoved ? "Note was remove"  : "Note not found"
	console.log(message)
} else {
	console.log('command not recognized')
}

