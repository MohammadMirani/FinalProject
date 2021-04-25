const express = require('express');
const Router = express.Router();

const {
    createComment,
    deleteComment
} = require('./comment.service')


Router.post('/createComment', createComment)
Router.post('/deleteComment/:commentId', deleteComment)



module.exports = Router