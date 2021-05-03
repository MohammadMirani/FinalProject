const User = require('../models/user')
const fs = require('fs')
const path = require('path')


async function createAdmin() {

    try {
        const existAdmin = await User.findOne({
            role: "admin"
        })
        if (existAdmin) return console.log("Admin already created")
        const newAdmin = await new User({
            firstName: "admin",
            lastName: "admin",
            userName: "admin",
            password: "admin",
            Email: "admin@gmail.com",
            phoneNumber: "0000000",
            sex: "male",
            role: "admin",
            avatar: "avatar.png"
        })
        let admin = await newAdmin.save()
        console.log(admin)
    } catch(err) {
        console.log("error in creating admin")
    }
}

function existFolder() {
    const dirImages = path.join(__dirname, '../public/images');
    if (!fs.existsSync(dirImages)) {
        fs.mkdirSync(dirImages);
    }
    const dirAvatars = path.join(__dirname, '../public/images/avatars');
    if (!fs.existsSync(dirAvatars)) {
        fs.mkdirSync(dirAvatars);
    }
}


module.exports = (function () {
    createAdmin();
    existFolder()
})()