const User = require('../models/user')
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
            role: "superAdmin"
        })

        newUser.save((err, user) => {
            if (err) return console.log("error in creating super admin");
            return console.log(user);
        })
    })
    

}
module.exports = (function () {
    createAdmin();
})()