//Main Initialization
require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 2001
const app = express()
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')


//Express Configuration
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/public/uploads', express.static(path.join(__dirname, ('public/uploads'))))

//Middleware Implementation
require('./middleware/Session')(app)

//Security
let whitelist = ['http://localhost:3000', 'http://localhost:2000']
app.use(cors({
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
}))
app.use(helmet())


//Error Handling
app.use((err, req, res, next) => {
    res.status(500).send({
        Error: err.stack,
        Message: 'Something went wrong'
    })
})

//Routes Implementations
app.get("/", (req, res) => {
    res.json({
        message: 'welcome to REST API'
    })
})
require('./routes/Product.routes')(app)
require('./routes/ProductGallery.routes')(app)
require('./routes/Transaction.routes')(app)
require('./routes/TransactionDetail.routes')(app)
require('./routes/User.routes')(app)
require('./routes/Authentication.routes')(app)


//Server Running
app.listen(PORT, () => {
    console.log(`listening and serve at localhost:${PORT}`)
})