var async = require('async');

var initail=1;
async.parallel([
    f1,
    f2
],function(err,response){
    if(err){
        console.log('error111111');
    }else{
        console.log('response :',response)
    }
})

function f1(callback){
    console.log('inside f1',initail);
    initail = initail+1;
    return callback("errr",initail);
   
}

function f2(callback){
    console.log('inside f2',initail);
    initail = initail+1;
    return callback("errr",initail);
}