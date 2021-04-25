const express = require('express')
const Router = express.Router();
const auth = require('./auth/auth.controller')
const user = require('./user/user.controller')
const article = require('./article/article.controller')
const comment = require('./comment/comment.controller')


Router.use('/auth', auth)
Router.use('/user',user)
Router.use('/article', article)
Router.use('/comment', comment)

module.exports = Router;