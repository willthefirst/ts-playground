import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { Note } from './models'

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/notes', async (req: Request, res: Response) => {
  const notes = await Note.find().sort({ updatedAt: 'descending' }).limit(10)
  res.send(notes)
})

app.get('/notes/:noteId', async (req: Request, res: Response) => {
  const { noteId } = req.params
  console.log('Here', noteId)
  const note = await Note.findById(noteId)

  if (!note) {
    res.status(404).send('Could not find note.')
  }

  res.send(note)
})

app.post('/notes', (req: Request, res: Response) => {
  const note = new Note({
    title: '',
    body: '',
  })

  note.save()

  res.send('Note created!')
})

app.put('/notes/:noteId', async (req: Request, res: Response) => {
  const { noteId } = req.params
  const { title, body } = req.body

  const note = await Note.findByIdAndUpdate(noteId, {
    title,
    body,
  })

  res.send('Note updated!')
})

app.delete('/notes/:noteId', async (req: Request, res: Response) => {
  const { noteId } = req.params

  const note = await Note.findByIdAndDelete(noteId)

  res.send('Note deleted!')
})

app.listen(port, async () => {
  await mongoose.connect('mongodb://127.0.0.1/notes')

  console.log(`Example app listening on port ${port}`)
})

/***]
 *
 * mongoose
 * mongo
 *
 * notes
 *  - title
 *  - contents
 *  - dateCreated
 *  - dateModified
 *
 * ordered by most recently updated
 *
 *
 *
 */
