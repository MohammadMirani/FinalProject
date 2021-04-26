const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },

    description: {
        type: String,
    },
    bodyArticle: {
        type: String,
    },
    Owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    view: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastUpdate: {
        type: Date,
        default: Date.now,
    }

})

articleSchema.post('findOneAndDelete', function (doc, next) {

    fs.unlink(path.join(__dirname, `../public/images/article/${doc.image}`), (err) => {
        if (err) return next();
        next();
    })
})


module.exports = mongoose.model('Article', articleSchema)