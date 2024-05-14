var https = require('https');

exports.updateUser = function(req,res){
    var data,option;
    var body = JSON.stringify(req.body);
    console.log(' body in updateUsers ',body)
    option ={
        'host' : 'reqres.in',
        'path' : '/api/users',
        'method' : 'PUT',
        headers :{
            'Content-type' : 'application/json'
        }
    }
    var request = https.request(option,(resp)=>{
        resp.on('data',(chunck)=>{
            data +=chunck;
        });

        resp.on('end',()=>{
            res.set('Content-type','application/json');
            console.log('data returned after update::',data)
            res.send(data)
        });
    });
    request.on('error',(err)=>{
        console.log('error occured',err)
    });
    request.write(body);
    request.end();
}