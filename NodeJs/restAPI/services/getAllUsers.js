
var https = require('https');
exports.getAllUsers = function(req,res){
    
    https.get('https://reqres.in/api/users?page='+req.query.pageNo,function(resp){
    let data ="";
        resp.on('data',function(chunk){
            data += chunk;
        });

        resp.on('end',function(){
            res.set('Content-Type', 'application/json');
            var finalResponse = JSON.parse(data);
            res.send(data);
            console.log("res.headerSent ",res.headerSent);
          
            console.log("res.headerSent ",res.headerSent);
        })
    }).on('error',(error)=>{
        console.log('error occured',error);
        res.send(error)
    })
}