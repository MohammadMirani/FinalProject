const express = require('express')
const Router = express.Router();
const generalTools = require('../../tools/general-tools');

const {
    dashboard,
    logout,
    editProfile,
    avatar,
    deleteUser,
    getSingleUser,
    changePassword
} = require('./user.service')

Router.get('/dashboard', generalTools.loginChecker,dashboard)
Router.post('/editProfile',generalTools.loginChecker, editProfile)
Router.get('/logout',logout)
Router.post('/avatar', generalTools.loginChecker, avatar)
Router.get('/getSingleUser/:userId', generalTools.loginChecker, getSingleUser)
Router.delete('/deleteUser/:userId', generalTools.adminChecker, deleteUser)
Router.post('/ChangePassword', generalTools.adminChecker, changePassword)


module.exports = Router;