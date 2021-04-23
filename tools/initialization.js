const User = require('../models/user')
const fs = require('fs')
const path = require('path')

function createAdmin() {
    User.findOne({
        role: "superAdmin"
    }, (err, existSuperAdmin) => {
        if (err) return console.log("err in creating super admin");
        if (existSuperAdmin) return console.log("SuperAdmin already exist");
        const User = require('../models/user')
        const newUser = new User({
            firstName: "admin",
            lastName: "admin",
            userName: "admin",
            password: "admin",
            Email: "admin@gmail.com",
            phoneNumber: "0000000",
            sex: "male",
            role: "superAdmin",
            avatar :"avatar.png"
            
        })

        newUser.save((err, user) => {
            if (err) return console.log("error in creating super admin");
            return console.log(user);
        })
    })

}

function existFolder() {
    const dirImages = path.join(__dirname,'../public/images');
    if (!fs.existsSync(dirImages)) {
        fs.mkdirSync(dirImages);
    }
    const dirAvatars = path.join(__dirname,'../public/images/avatars');
    if (!fs.existsSync(dirAvatars)) {
        fs.mkdirSync(dirAvatars);
    }
}


module.exports = (function () {
    createAdmin();
    existFolder()
})()