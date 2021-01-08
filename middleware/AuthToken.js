module.exports = (req, res, next) => {
    const jwt = require('jsonwebtoken')
    const header = req.headers['authorization']
    if (typeof header !== 'undefined') {
        const token = header.split(" ")[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
            if (err) {
                res.sendStatus(403)
            } else {
                next()
            }
        })
    } else {
        res.sendStatus(403)
    }
}