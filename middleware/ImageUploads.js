const multer = require('multer')
const uploads = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'public/uploads')
        },
        filename: function(req, file, cb) {
            const name = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + "-" + name + "." + file.mimetype.split('/')[1])
        }
    }),
    fileFilter: function(req, file, cb) {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            cb(null, true)
        } else {
            cb(new Error('file must be an image'), false)
        }
    }
})

module.exports = uploads