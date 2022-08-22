require('dotenv-safe').config()

const express = require('express')
const cors = require('cors')
const user = require('./routes/userRoutes')
const product = require('./routes/productRoutes')
const shoppingCart = require('./routes/shoppingCartRoutes')
const index = require("./routes/indexRoutes")
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const mongoose = require('./database/mongooseConnect')

mongoose.connect()

const app = express()

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*")
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})


app.use(express.json())
app.use(cors())
app.use("/", index);
app.use("/user", user);
app.use("/product", product);
app.use("/shoppingCart", shoppingCart);
app.use("/documentRoutes", swaggerUi.serve, swaggerUi.setup(swaggerFile));


module.exports = app