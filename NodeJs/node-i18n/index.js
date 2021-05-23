var express = require('express')
var url = require('url')
var path = require('path')
var i18n = require('i18n')

i18n.configure({
  locales: ['en', 'de', 'ar','kannada'],
  directory: path.join(__dirname, 'locales'),
  updateFiles: false
})

var app = express()
app.use(i18n.init)

app.get("/mylanguage/:lang",function(req,res){
  console.log('req.params.lang ',req.params.lang)
  i18n.setLocale(req, req.params.lang);
  let msg = req.__('message');
  let response =  req.__('Hello')+"!!! "+req.__('registration successful');
  let message= {};
  message[msg] = response;
  res.send(message)
})


// startup
app.listen(3000,()=>console.log("listening on 3000"))
