const multer = require('multer')
const path = require('path')
const User = require('../../models/user')
const Comment = require('../../models/comment')
const Article = require('../../models/article')
const generalTools = require('../../tools/general-tools')




const createArticlePage = (req, res) => {
    res.render('article/createArticle')
}

const createArticle = (req, res) => {

    const upload = generalTools.uploadArticle.single('articleImage');
    upload(req, res, function (err) {

        if (err instanceof multer.MulterError) {
            res.status(500).send("server error :(");
        } else if (err) {
            res.status(404).send("Bad Request");
        } else {
            if (!req.body.title || !req.body.description || !req.body.bodyArticle || !req.file.filename) return res.status(400).send("server error :(")
            Article.findOne({
                title: req.body.title
            }, (err, existTitle) => {
                if (err) return res.status(500).send("server error :(")
                if (existTitle) return res.status(400).send("Duplicate Article")

                const newArticle = new Article({
                    title: req.body.title,
                    description: req.body.description,
                    bodyArticle: req.body.bodyArticle,
                    Owner: req.session.user._id,
                    image: req.file.filename
                })
                newArticle.save((err, article) => {
                    if (err) return res.status(500).send("server error :(")
                    return res.redirect('/user/dashboard')
                })
            })
        }
    })
}

const getSingleArticle = (req, res) => {
    Article.findOne({
        _id: req.params.articleId
    }, (err, article) => {
        if (err) return res.status(500).send("server error :(")
        req.session.article = article;
        console.log(req.session);
        user = req.session.user;
        Comment.find({Article : req.session.article._id}).populate('Owner').exec((err, comment) => {
            if (err) return res.status(500).send("server error :(")
            return res.render('article/articlePage', {
                user,
                article,
                comment
            })
        })

    })
}

const deleteSingleArticle = (req, res) => {
    Article.findOneAndDelete({
        _id: req.params.articleId
    }, (err, deletedArticle) => {
        if (err) return res.status(500).send("server error :(")
        return res.redirect('/user/dashboard')
    })
}
const editArticlePage = (req, res) => {
    Article.findOne({
        _id: req.params.articleId
    }, (err, article) => {
        if (err) return res.status(500).send("server error :(")
        res.render('article/editArticlePage', {
            article
        })
    })
}


const editArticle = (req, res) => {
    const upload = generalTools.uploadArticle.single('articleImage')
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send("server error :(");
        } else if (err) {
            res.status(400).send("server error :(");
        } else {
            if (!req.body.title || !req.body.description || !req.body.bodyArticle || !req.file.filename) return res.status(400).send("server error :(")

            Article.findOneAndUpdate({
                _id: req.params.articleId
            }, {
                title: req.body.title,
                description: req.body.description,
                bodyArticle: req.body.bodyArticle,
                image: req.file.filename
            }, {
                new: true
            }, (err, article) => {
                if (err) return res.status(500).send("server error :(")

                return res.redirect('/user/dashboard')
            })
        }


    })
}
const getAllArticle = (req, res) => {
    Article.find({}, (err, articles) => {
        console.log(articles);
        if (err) return res.status(500).send("server error :(")

        return res.render('article/allarticle', {
            articles
        })

    })
}

module.exports = {
    createArticlePage,
    createArticle,
    getSingleArticle,
    deleteSingleArticle,
    editArticlePage,
    editArticle,
    getAllArticle
}