const User = require('../../models/user')
const bcrypt = require('bcrypt')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const Article = require('../../models/article')
const generalTools = require('../../tools/general-tools')


const dashboard = (req, res) => {
    user = req.session.user;

    Article.find({
        Owner: req.session.user._id
    }, (err, articles) => {
        if (err) return res.status(500).send("server error :(")
   
        // articles = JSON.stringify(articles)
        return res.render('user/dashboard', {
           user, articles
        })

    })

 
}

const editProfile = (req, res) => {
    ////??? chera model hash nemikone ??? mage isModified nazadim?
    let password = bcrypt.hashSync(req.body.password, 10)

    User.findOneAndUpdate({
        userName: req.session.user.userName
    }, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.session.user.userName,
        password: password,
        Email: req.body.Email,
        phoneNumber: req.body.phoneNumber,
        sex: req.body.sex
    }, {
        new: true
    }, (err, user) => {
        if (err) return console.log(err.message);
        req.session.user = user;
        return res.redirect('/user/dashboard')
    })
}

const avatar = (req, res) => {
    const upload = generalTools.uploadAvatar.single('avatar')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send("server error")
        } else if (err) {
            res.status(400).send(err.message)
        } else {

            User.findOneAndUpdate({
                _id: req.session.user._id
            }, {
                avatar: req.file.filename
            }, {
                new: true
            }, (err, user) => {
                if (err) {
                    return res.status(500).send("server error")
                } else {
                    console.log(req.session.user.avatar);
                    if (req.session.user.avatar && req.session.user.avatar !=="avatar.png" ) {
                        console.log(req.session.user.avatar);
                        fs.unlink(path.join(__dirname, `../../public/images/avatars/${req.session.user.avatar}`), err => {
                            if (err) {
                                return res.status(500).send("server error")
                            } else {
                                req.session.user = user;
                                return res.redirect('/user/dashboard')
                            }
                        })

                    } else {
                        req.session.user = user;
                        return res.redirect('/user/dashboard')

                    }
                }
            })
        }

    })
}

const logout = (req, res, next) => {
    req.session.destroy();
    res.clearCookie('user_sid')
    res.redirect('/auth/loginPage')
}

module.exports = {
    dashboard,
    logout,
    editProfile,
    avatar
}