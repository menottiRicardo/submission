const mongoose = require('mongoose')



const url = process.env.MONGODB_URI

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'CSS is hard',
  date: new Date(),
  important: false,
})

// eslint-disable-next-line no-constant-condition
if ( false ) {
  note.save().then(() => {
    console.log('note saved!')
    mongoose.connection.close()
  })
}

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})