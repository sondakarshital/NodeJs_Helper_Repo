var https = require('https');

exports.postUser = function(req,res){
    var body = JSON.stringify(req.body);
    console.log("body ",body);
    var finalData = "";
    var options = {
        host: "reqres.in",
        path: "/api/users",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    };
    var req = https.request(options,(resp)=>{
        resp.on('data',(data)=>{
            console.log('inside data11')
            finalData +=data;
        });
        resp.on('end',()=>{
            console.log('inside end')
            res.set('Content-Type', 'application/json');
            var finalResponse = JSON.parse(finalData);
            res.status(201)
            res.send(finalData);
           
        });
    }).on('error',(error)=>{
        console.log('error occured',error);
        res.send(error)
    })
    req.write(body);
    req.end();
}