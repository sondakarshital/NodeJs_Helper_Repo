const express = require('express');
const userRouter = require('./router/user')
require('./mongoose.js')
const app = express();
const port = process.env.port || 2500
app.use(express.json())
app.use(userRouter);

app.listen(port,()=>{
    console.log('server is running on::',port)
})

module.exports = app;