const mongoose = require('mongoose');
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');

describe('Associations',()=>{
    let shital,blogPost,comment;
    beforeEach((done)=>{
       shital = new User({name : "Shital"});
       comment = new Comment({content : "Congrtz on great post"});
       blogPost = new BlogPost({title : 'Js is great ',content : "Yup it is great"})

       shital.blogPost.push(blogPost);
       blogPost.comments.push(comment);
       comment.user = shital;

       Promise.all([shital.save(),comment.save(),blogPost.save()]).then(()=>{
            done();
       });
    });

    it('saves the full relation tree and blogpost',async()=>{
        const user = await User.findOne({name : "Shital"}).populate('blogPost').exec();
        console.log('user tree ',JSON.stringify(user));
    })
    it('saves the full relation tree',async()=>{
        const user = await User.findOne({name : "Shital"})
        .populate({
            path :"blogPost",
            populate :{
                path : "comments",
                model : "comment",
                populate :{
                    path : "user",
                    model : "user" 
                }
            }
        })
        console.log('user ',JSON.stringify(user));
    })
    
})