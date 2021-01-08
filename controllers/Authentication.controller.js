const models = require('../models')
const User = models.User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.Login = (req, res) => {
    const { username, password } = req.body
    User.findOne({
        where: {
            username: username

        }
    }).then(async userDB => {
        try {
            if (await bcrypt.compare(password, userDB.password)) {
                const accessToken = jwt.sign({ AuthData: userDB }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' })
                const refreshToken = jwt.sign({ AuthData: userDB }, process.env.REFRESH_TOKEN_SECRET)
                req.session.refreshToken = refreshToken
                res.status(200).json({
                    AccessToken: accessToken,
                    RefreshToken: refreshToken
                })
            } else {
                res.status(500).send("Wrong Password")
            }
        } catch (err) {
            console.log(err)
        }
    }).catch(err => {
        res.status(500).send({
            Error: err,
            message: "Can't find user with specific username"
        })
    })
}
exports.GenerateRefreshToken = (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken === null) return res.sendStatus(404)
    if (req.session.refreshToken !== refreshToken) return res.sendStatus(500)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
        if (err) return res.send('error')
        const accessToken = jwt.sign({ data: data.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "60s" })
        res.json(accessToken)
    })
}

exports.Logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err)
            return
        } else {
            res.clearCookie(process.env.SESSION_NAME)
            res.redirect('/')
        }
    })
}