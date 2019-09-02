const MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://Test:Test@mongodb-2090-0.cloudclusters.net:10001/test?authSource=admin";

//var uri = "mongodb://BokuAdmin:BokuPassword@mongodb-2087-0.cloudclusters.net:10001/swarTest?authSource=admin";


exports.mongoConnection= function(callBack){
    MongoClient.connect(uri,(err,db)=>{
        if(err){
            console.log("error occured",err);
            return callBack("connection error",null);
        }else{
           return callBack(null,db);
        }
    });
}

    