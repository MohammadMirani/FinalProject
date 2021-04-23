const express = require('express');
const Router = express.Router();

const {createComment} = require('./comment.service')


Router.post('/createComment', createComment)


module.exports = Router