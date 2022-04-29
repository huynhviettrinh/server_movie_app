const express = require('express')
const morgan = require('morgan')
const app = express()
const route = require('./routes/routerWeb');
const connectDB = require('./config/connectDB')
const bodyParser = require('body-parser')
require('dotenv').config();

// app.use(morgan('combined'))
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

route(app)

connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

