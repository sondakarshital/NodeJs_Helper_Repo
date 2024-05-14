const mongoose = require('mongoose');
const postSchema = require('./post');
const userScema = mongoose.Schema({
    name :{
        type : String,
        required : [true,'Name is required'],
        validate : {
            validator :(name)=>{
                return name.length>2
            },
            message : 'Name must be length of 2'
        }
    },
    posts : [postSchema],
    blogPost : [{
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'blogPost'
    }]
});
userScema.virtual('postCount').get(function(){
    return this.posts.length;
});

userScema.pre('remove',function(next){

    const blogPosts = mongoose.model('blogPost');

    blogPosts.remove({_id:{$in:this.blogPost}}).then(()=>{
        next();
    })

});
const User = mongoose.model('user',userScema);
module.exports = User;