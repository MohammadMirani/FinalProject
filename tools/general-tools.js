generalTools = {}

generalTools.sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/user/dashboard')
    } else
    next();
}

generalTools.loginChecker = (req,res, next)=>{
    if(!req.session.user){
        res.redirect('/auth/loginPage')
    } else 
    next()
}

module.exports = generalTools