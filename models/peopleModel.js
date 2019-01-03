const moongose = require('mongoose')
const Schema = moongose.Schema

const peopleSchema = new Schema({
    name : String,
    age : Number,
    latitude: String,
    longitude: String,
    monthlyIncome : Number,
    experienced: Boolean,
    score: Number,
    accid: {
        type: Schema.Types.ObjectId, ref:'Account'
    }
})

const People = moongose.model('People', peopleSchema)

module.exports = People