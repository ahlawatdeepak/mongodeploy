const mongoose = require("mongoose")
const connect = () => {
    return mongoose.connect("mongodb+srv://deepakahlawat:deepakahlawat@cluster0.qkndiwa.mongodb.net/?retryWrites=true&w=majority")
}
module.exports = connect