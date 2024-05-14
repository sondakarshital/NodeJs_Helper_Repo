const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const BlogPost = require('../src/blogPost');

describe('Associations',()=>{
    let shital,blogPost,comment;
    beforeEach((done)=>{
       shital = new User({name : "Shital"});
       blogPost = new BlogPost({title : 'Js is great ',content : "Yup it is great"})

       shital.blogPost.push(blogPost);

       Promise.all([shital.save(),blogPost.save()]).then(()=>{
            done();
       });
    });
    it('clean up blogpost after user delete',()=>{
        shital.remove().
        then(()=>BlogPost.count()).
        then((count)=>{
            console.log('Count ',count);
        })
    })
});