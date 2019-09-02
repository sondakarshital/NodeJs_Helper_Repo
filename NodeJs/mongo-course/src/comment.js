const mongoose = require('mongoose');

const schema = mongoose.Schema({
    content :String,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }
});

const Comment = mongoose.model('comment',schema);

module.exports = Comment;