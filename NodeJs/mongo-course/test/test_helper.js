const mongoose = require('mongoose');
var uri = "mongodb://127.0.0.1:27017/users_test";

mongoose.connect(uri,{
    useNewUrlParser :true,
    useCreateIndex : true
});
var db = mongoose.connection;
mongoose.connection
.once('open',()=>{
  
})
.on('error',(err)=>console.log('error occured'));

beforeEach((done) =>{
    const {users,comments,blogposts} = mongoose.connection.collections;
    users.drop(()=>{
        comments.drop(()=>{
            blogposts.drop(()=>{
                done();
            })
        })
    })
})
