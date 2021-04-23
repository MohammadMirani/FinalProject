const express = require('express')
const Router = express.Router();
const generalTools = require('../../tools/general-tools');

const {
    dashboard,
    logout,
    editProfile,
    avatar
} = require('./user.service')

Router.get('/dashboard', generalTools.loginChecker,dashboard)
Router.post('/editProfile', editProfile)
Router.get('/logout',logout)
Router.post('/avatar', avatar)

module.exports = Router;