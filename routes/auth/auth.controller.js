const express = require('express');
const Router = express.Router();
const generalTools = require('../../tools/general-tools')

const {
    RegisterPage,
    register,
    loginPage,
    login,
    createAdmin
} = require('./auth.service')

Router.get('/registerPage', generalTools.sessionChecker, RegisterPage)
Router.post('/register', register)
Router.get('/loginPage', generalTools.sessionChecker , loginPage)
Router.post('/login', login)
Router.post('/createAdmin',createAdmin)

module.exports = Router;