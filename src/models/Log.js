const mongoose = require('mongoose')

const LogSchema = new mongoose.Schema({
    user: String,
    file_input: String,
    file_output: String,
    option: String,
    key: String,
    when: Date
})

module.exports = mongoose.model("Log", LogSchema)