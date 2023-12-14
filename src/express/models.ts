import mongoose, { model } from 'mongoose'

const Schema = mongoose.Schema

export const noteSchema = new Schema(
  {
    title: String,
    body: String,
  },
  {
    timestamps: true,
  }
)

export const Note = model('Note', noteSchema)
