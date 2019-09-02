var mongo = require('./mongotest.js');

mongo.mongoConnection((err,db)=>{
    if(err){
        console.log("error occured");
    }else{
        console.log("connection succesfull");
        var dbo = db.db("Test");
        var collection  = dbo.collection("employee");
       var myObj = {"name" : "Arpitha"};
       collection.insertOne(myObj,function(err,result){
        //collection.insert({"encryptedMsisdn":"F1d0IItawhD6ECkP_DQIVg.."}).toArray(function(err,result){
           // collection.insert(data,function(err,result){
            if(err){
                console.log("error occured",err);
            }else{
                console.log("object retrieved ",result);
            }
        });
        
    }
   
});