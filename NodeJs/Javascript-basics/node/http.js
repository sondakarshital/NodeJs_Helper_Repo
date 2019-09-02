var http = require('http');

var server = http.createServer((req,res)=>{
    
    res.send('hello world');
});

server.listen(4000,()=>{
    console.log('listening on 4000');
})