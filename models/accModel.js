const moongose = require('mongoose')
const Schema = moongose.Schema

const accSchema = new Schema({
    username: String,
    password: String
})

const Acc = moongose.model('Account', accSchema)
