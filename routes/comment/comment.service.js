const Comment = require('../../models/comment')

const createComment = (req, res) => {

    const newComment = new Comment({
        text: req.body.text,
        Owner: req.session.user._id,
        Article: req.session.article._id
    })

    newComment.save((err, comment) => {
        if (err) return res.status(500).send('server error :(')
        res.redirect(`/article/getSingleArticle/${req.session.article._id}`)
    })
}


module.exports = {
    createComment
}