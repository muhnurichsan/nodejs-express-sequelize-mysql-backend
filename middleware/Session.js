module.exports = (app) => {
    const session = require('express-session')
    const SequelizeStore = require('connect-session-sequelize')(session.Store)
    const database = require('../models/').sequelize
    app.use(session({
        name: process.env.SESSION_NAME,
        resave: false,
        store: new SequelizeStore({
            db: database,
        }),
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET,
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60
        }
    }))
}