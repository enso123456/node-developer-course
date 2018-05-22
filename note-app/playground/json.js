const fs = require('fs')

const fileString = {title: "Red Riding Hood"}

fs.writeFileSync('notes.json', JSON.stringify(fileString))

const notesString = fs.readFileSync('notes.json')

const notes = JSON.parse(notesString)

console.log(notes)
console.log(typeof notes)
console.log(notes.title)