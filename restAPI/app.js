const express = require('express');
// import morgan package
const morgan = require('morgan');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');

var getAllUsers = require('./services/getAllUsers.js');
var getUserById = require('./services/getUserById.js');
var postUser = require('./services/postUser.js');
var updateUser = require('./services/updateUsers.js')

var app = express();
const port = 4000;
app.use(morgan('dev'));
//body-parser as middleware configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/header', function (req, res) {
    console.log(res.headersSent); // false
    res.send('OK');
    console.log(res.headersSent); // true
    res.send('OK');
  });
/*method to get all users*/
app.get('*/getAllUsers',getAllUsers.getAllUsers)
/*method to get user by id*/

app.get('*/getUserById/:id',getUserById.getUserById)

/*method to post users*/

app.post('*/user',postUser.postUser)

/*method to put user*/

app.put('*/user/:id',updateUser.updateUser);

app.all("*",(req,res)=>{
    res.set({
        'content-type' :'text/xml'
    });
    res.status(404).send('Unsupported api response for resource '+req.path);

})

app.listen(port,function(){
    console.log('server listening on ',port)
});
