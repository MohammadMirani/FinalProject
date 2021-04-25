const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({

    text: {
        type: String,
        required: true
    },

    Owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Article: {
        type: Schema.Types.ObjectId,
        ref: 'Article',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});



module.exports = mongoose.model('Comment', commentSchema)