generalTools = {}
const multer = require('multer')
const path = require('path')
const User = require('../models/user')

//// handle session & login for users
generalTools.sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/user/dashboard')
    } else
        next();
}

generalTools.loginChecker = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/auth/loginPage')
    } else
        next()
}

generalTools.adminChecker = (req, res, next) => {
    if(req.session.user.role !=="admin"){
        res.redirect('/user/dashboard')
    }else
    next()
}



const avatarStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/avatars'))
    },
    filename: function (req, file, cb) {
        cb(null, `${req.session.user.userName}` + '-' + Date.now() + file.originalname)
    }
})



generalTools.uploadAvatar = multer({
    storage: avatarStorage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg') {
            cb(null, true)
        } else {
            cb(new Error("invalid type"), false)

        }
    }
})


const articleStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/article'))
    },
    filename: function (req, file, cb) {
        cb(null, req.session.user.userName + '-' + Date.now() + '-' + file.originalname)
    }
})

generalTools.uploadArticle = multer({
    storage: articleStorage,
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg') {
            cb(null, true)
        } else {
            cb(new Error("Invalid image type"), false)
        }
    }
})



module.exports = generalTools