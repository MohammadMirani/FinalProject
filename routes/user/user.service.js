const User = require('../../models/user')
const bcrypt = require('bcrypt')
const dashboard = (req, res) => {
    res.render('user/dashboard', {
        user: req.session.user
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


const logout = (req, res, next) => {
    req.session.destroy();
    res.clearCookie('user_sid')
    res.redirect('/auth/loginPage')
}

module.exports = {
    dashboard,
    logout,
    editProfile
}