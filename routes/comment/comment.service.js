const Comment = require('../../models/comment')

const createComment = (req, res) => {

    const newComment = new Comment({
        text: req.body.text,
        Owner: req.session.user._id,
        Article: req.session.article._id
    })

    newComment.save((err, comment) => {
        if (err) return res.status(500).send('server error :(')
        return res.redirect(`/article/getSingleArticle/${req.session.article._id}`)
    })
}

const deleteComment =(req, res)=>{
    Comment.findOneAndDelete({
        _id: req.params.commentId
    }, (err, deletedComment) => {
        if (err) return res.status(500).send("server error :(")
        return res.redirect(`/article/getSingleArticle/${req.session.article._id}`)
    })
}

module.exports = {
    createComment,
    deleteComment
}