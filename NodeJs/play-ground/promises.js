const doCallbackWork = function(callback){
    setTimeout(()=>{
        //callback('This is an error',undefined)
        callback(undefined,'success')
    },2000)
};

doCallbackWork((err,result)=>{
    if(err) return console.log('error occured');
    console.log('result',result);
});