
const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(
       "mongodb+srv://saikirandavangamsreedhar:knmgtmD8XRIB4NPW@namastenodejs.m1g5f.mongodb.net/devTinder"
    )
}

module.exports = connectDB;

