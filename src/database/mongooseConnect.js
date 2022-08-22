require('dotenv-safe').config()
const mongoose = require("mongoose")

const DATABASE_URI = process.env.DATABASE_URI

const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Banco de dados conectado com sucesso!")
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    connect
}