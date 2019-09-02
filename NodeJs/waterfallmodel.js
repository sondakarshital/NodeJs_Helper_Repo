var async = require('async');

var initail=1;
async.waterfall([
    f1,
    f2
   
],function(err,response){
    if(err){
        console.log('inside error',err)
    }else{
        console.log('response :',response)
    }
})

function f1(callback){
    console.log('inside f1',initail);
    initail = initail+1;
    return callback("errorq12",initail);
}

function f2(initail,callback){
    console.log('inside f2',initail);
    initail = initail+1;
    return callback(null,initail);
}