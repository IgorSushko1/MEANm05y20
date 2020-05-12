const mongoose = require('mongoose')
const Schema = mongoose.Schema

const positionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    const: {
      type: Number,
      required: true
    },
    category: {
        ref: 'category',
        type: Schema.ObjectId
    },
    user: {
        ref: 'users',
        type: Schema.ObjectId
    }
})

module.exports = mongoose.model('position', positionSchema)
