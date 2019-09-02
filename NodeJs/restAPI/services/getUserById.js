var https = require('https');

exports.getUserById = function(req,res){
    var url = "https://reqres.in/api/users/"+req.params.id;
    var userCookieData = req.cookies.userData;

     if(userCookieData.data.id == req.params.id){
        console.log('data returned from cookie');
        res.set('Content-Type', 'application/json');
        res.send(userCookieData);
     }
     else{
         console.log('actual call')
        https.get(url,(resp)=>{
            let finalData ="";
                resp.on('data',(chunk)=>{
                    finalData += chunk;
                });
        
                resp.on('end',()=>{
                    res.set('Content-Type', 'application/json');
                    var finalResponse = JSON.parse(finalData);
                    res.cookie("userData", finalResponse,{expire :1+Date.now()}); 
                    res.send(finalResponse);
                })
            }).on('error',(error)=>{
                console.log('error occured',error);
                res.send(error)
            })
     }
}