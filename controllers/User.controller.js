const models = require('../models')
const bcrypt = require('bcrypt')
const User = models.User

exports.CreateNewUser = async(req, res) => {
    if (!req.body) {
        res.status(404).json({
            message: "Content can't be empty"
        })
    }
    const { username, email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = {
            username: username,
            email: email,
            password: hashedPassword,
        }
        User.create(newUser).then(data => {
            res.status(200).send(data)
        }).catch(err => {
            res.status(500).send(err)
        })
    } catch (err) {
        console.log(err)
    }

}
exports.FindAllUsers = (req, res) => {
    User.findAll()
        .then(data => {
            res.status(200).send({
                data
            })
        }).catch(err => {
            res.status(400).send(err)
        })

}
exports.DeleteUserById = (req, res) => {
    const id = req.params.id
    User.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            message: "Data Successfully deleted",
        })
    }).catch(err => {
        res.status(500).json({
            message: err || 'Error while delete data'
        })
    })
}
exports.FindUserById = (req, res) => {
    const id = req.params.id
    User.findOne({
        where: {
            id: id
        }
    }).then((data) => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json({
            message: err || 'Error while delete data'
        })
    })
}
exports.UpdateUserById = (req, res) => {
    const id = req.params.id
    User.update(req.body, {
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            message: "Data successfully updated",
        })
    }).catch(err => {
        res.status(500).json({
            message: err || 'Error while update data'
        })
    })
}