const express = require('express')
const Router = express.Router();
const auth = require('./auth/auth.controller')
const user = require('./user/user.controller')
Router.use('/auth', auth)
Router.use('/user',user)

module.exports = Router;