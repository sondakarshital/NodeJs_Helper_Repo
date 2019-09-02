var express = require('express');
var app = express();
var path = require('path')

var app= express();
app.get("*/hello",(req,res)=>{
    res.send('Hello world!!');
})
app.listen(3000,()=>{
    console.log("app is listening on 3000")
});
