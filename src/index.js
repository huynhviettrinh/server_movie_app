const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const route = require('./routes/routerWeb');
const connectDB = require('./config/connectDB')
const bodyParser = require('body-parser')

// app.use(morgan('combined'))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

route(app)

connectDB();


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

