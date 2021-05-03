const express = require('express');
const Router = express.Router();
const generalTools = require('../../tools/general-tools')
const {
    createArticlePage,
    createArticle,
    getSingleArticle,
    deleteSingleArticle,
    editArticlePage,
    editArticle,
    getAllArticle,
    deleteArticleByAdmin

} = require('./article.service')


Router.get('/createArticlePage', generalTools.loginChecker, createArticlePage)
Router.post('/createArticle', generalTools.loginChecker, createArticle)
Router.get('/getSingleArticle/:articleId', getSingleArticle)
Router.delete('/deleteSingleArticle/:articleId', generalTools.loginChecker, deleteSingleArticle)
Router.get('/editArticlePage/:articleId',generalTools.loginChecker,editArticlePage)
Router.post('/editArticle/:articleId',generalTools.loginChecker,editArticle)
Router.get('/getAllArticle',getAllArticle)
Router.delete('/deleteArticleByAdmin/:articleId',generalTools.adminChecker, deleteArticleByAdmin)



module.exports = Router;