var async = require('async');

var initail=1;
async.series([
    f1,
    f2
],function(err,response){
    console.log('response :',response)
})

function f1(callback){
    console.log('inside f1',initail);
    initail = initail+1;
    return callback(null,initail);
}

function f2(callback){
    console.log('inside f2',initail);
    initail = initail+1;
    return callback(null,initail);
}