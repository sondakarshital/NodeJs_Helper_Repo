const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer');

const upload = new multer({
    limits : {
        fileSize : 1000000
    },
    fileFilter (req,file,cb){
       console.log('originalname',file.originalname);
       if(!file.originalname.match('\.(pdf)$')){
           return cb(new Error('Upload only pdf files'));
       }
       cb(undefined,true);
    }
});

app.post('/upload',upload.single('upload'),(req,res)=>{
    console.log("inside",req.file.buffer);
    res.send();
},(error,req,res,next)=>{
    res.status(400).send({error:error.message});
});

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

//main();

