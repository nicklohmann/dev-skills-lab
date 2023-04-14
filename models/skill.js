import mongoose, { mongo } from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  text: String,
  hasSkill: Boolean,
})

const Skill = mongoose.model('Skill' , skillSchema)

export {
  Skill
}