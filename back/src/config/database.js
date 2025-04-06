const mongoose = require('mongoose')

const dbConfig = (app) => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Database Connected')
        app.emit('DataBase')
    })
    .catch((err) => {
        console.error('Database connection error:', err)
    })
}

module.exports = dbConfig

