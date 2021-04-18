const User = require('../../models/user')
const Url = require('url')
const bcrypt = require('bcrypt')
const fieldPattern = [
    "firstName",
    "lastName",
    "userName",
    "password",
    "Email",
    "phoneNumber",
    "sex"
]

const RegisterPage = (req, res) => {

    res.render('auth/register', {
        msg: req.query.msg
    })
}

const register = (req, res) => {

    const bodyKey = Object.keys(req.body)
    if (bodyKey.length !== fieldPattern.length) {
        return res.redirect(Url.format({
            pathname: "/auth/registerPage",
            query: {
                msg: "Empty Fields"
            }
        }))
    }

    User.findOne({
        userName: req.body.userName.trim()
    }, (err, existUser) => {
        if (err) {
            return res.redirect(Url.format({
                pathname: "/auth/registerPage",
                query: {
                    msg: "Server Error :( !!!"
                }
            }))
        }

        if (existUser) {
            return res.redirect(Url.format({
                pathname: "/auth/registerPage",
                query: {
                    msg: "This user name already taken"
                }
            }))
        }

        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: req.body.password,
            Email: req.body.Email,
            phoneNumber: req.body.phoneNumber,
            sex: req.body.sex

        })
        newUser.save((err, user) => {
            if (err) return res.redirect(Url.format({
                pathname: "/auth/registerPage",
                query: {
                    msg: err.message
                }
            }))

            return res.redirect(Url.format({
                pathname: "/auth/loginPage",
                query: {
                    msg: "Your Register was successful"
                }
            }))
        })
    })


}

const loginPage = (req, res) => {
    res.render('auth/login', {
        msg: req.query.msg
    })
}

const login = (req, res) => {

    if (!req.body.userName || !req.body.password) {
        return res.redirect(Url.format({
            pathname: "/auth/loginPage",
            query: {
                msg: "Empty Fields"
            }
        }))
    }

    User.findOne({
        userName: req.body.userName.trim()
    }, (err, user) => {
        if (err) {
            return res.redirect(Url.format({
                pathname: "/auth/loginPage",
                query: {
                    msg: "Server Error :("
                }
            }))
        }
        if (!user) {
            return res.redirect(Url.format({
                pathname: "/auth/loginPage",
                query: {
                    msg: "This user doesn't exist!!!"
                }
            }))
        }

        bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
            if (err) {
                return res.redirect(Url.format({
                    pathname: "/auth/loginPage",
                    query: {
                        msg: "Server error :(( "
                    }
                }))
            }
            if (!isMatch) {
                return res.redirect(Url.format({
                    pathname: "/auth/loginPage",
                    query: {
                        msg: "Wrong password !!"
                    }
                }))
            }


            req.session.user = user
            return res.redirect(Url.format({
                pathname: "/user/dashboard"

            }))

        })

    })


}

const createAdmin = async (req, res) => {

    const bodyKey = Object.keys(req.body)
    if (bodyKey.length !== fieldPattern.length) {
        return res.redirect(Url.format({
            pathname: "/auth/registerPage",
            query: {
                msg: "Empty Fields"
            }
        }))
    }

    try {
        const existAdmin = await User.findOne({
            userName: req.body.userName
        })
        let newAdmin = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: req.body.password,
            Email : req.body.Email,
            role: "admin",
            sex: req.body.sex,
            phoneNumber: req.body.phoneNumber
        })

        admin = await newAdmin.save()
        return res.json(admin);

    } catch (err) {
        return res.status(400).send(err.message)
    }
}

module.exports = {
    RegisterPage,
    register,
    loginPage,
    login,
    createAdmin
}