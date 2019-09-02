const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title :String,
    content : String,
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'comment'
    }]
});

const BlogPost = mongoose.model('blogPost',schema);

module.exports = BlogPost;