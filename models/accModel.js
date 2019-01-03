const moongose = require('mongoose')
const Schema = moongose.Schema

const accSchema = new Schema({
    username: String,
    password: String
})

const Account = moongose.model('Account', accSchema)

module.exports = Account
