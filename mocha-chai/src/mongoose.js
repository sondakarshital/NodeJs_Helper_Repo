const mongoose = require('mongoose');
var uri = "mongodb://Test:Test@mongodb-2090-0.cloudclusters.net:10001/user-info?authSource=admin";

mongoose.connect(uri,{
    useNewUrlParser :true,
    useCreateIndex : true
});

