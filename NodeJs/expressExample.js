var express = require('express');
var app = express();
var resp = require('./responses/response.js');
let http = require('https');

app.get('/users', function (req, res) {
  http.get('https://104.27.135.11:443/api/users?page=2',function(resp){
    let data ="";
        resp.on('data',function(chunk){
            data += chunk;
        });

        resp.on('end',function(){
            res.set('Content-Type', 'application/json');
            var finalResponse = JSON.parse(data);
            res.send(data);
        })
    }).on('error',(error)=>{
        console.log('error occured',error);
        res.send(error)
    })
  });



app.listen(3000);
console.log('app listening on 3000')