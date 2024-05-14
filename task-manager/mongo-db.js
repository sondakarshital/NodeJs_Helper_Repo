var mongodb = require('./mongotest');
const objectID = require('mongodb').ObjectID;
const databaseName = "task-manager";
mongodb.mongoConnection((err,client)=>{
    if(err) {
        return "Unable to connect to database";
    }
    console.log("connected successfully");
    var db = client.db(databaseName);
    //Single object insert
    // db.collection('users').insertOne({
    //     "name" :"Shital",
    //     "age" : 26
    // },(error,result)=>{
    //     if(error){
    //         return console.log("Unable to insert user")
    //     }
    //     console.log("User inserted successfully",result.ops);
    // });

    //Bulk insert
    // db.collection('users').insertMany([{
    //     "name" :"prabhu",
    //     "age" :28
    // },{
    //     "name" :"Shital",
    //     "age" :26
    // }],(err,result)=>{
    //     if(err) return console.log("can't insert many objects")
    //     console.log("multiple records inserted",result.ops);
    // });
    // db.collection('tasks').insertMany([{
    //     description :"Clean the house",
    //     completed : true
    // },{
    //     description :"Renew inspection",
    //     completed : false
    // },
    // {
    //     description :"Pot plants",
    //     completed : false
    // }],(err,result)=>{
    //     if(err) return console.log("can't insert many objects")
    //     console.log("multiple records inserted",result.ops);
    // });

    const id = new objectID();
    console.log("id ",new objectID("5d1dec025d47ea2950c94edf"));
    //finding the data
    db.collection('users').findOne({_id :new objectID("5d1dec025d47ea2950c94edf")},(err,user)=>{
        console.log("user ",user);
    })
    // db.collection('users').find({name :'Shital'}).sort((err,results)=>{
    //     console.log('results ',results);
    // })

    //Updating the documents
    // db.collection('users').update({
    //     'name' :'Shital'
    // },{
    //     $set : {name :'Shital Sondakar'}
    // }).then((result)=>{
    //     console.log('result ',result)
    // }).catch((error)=>{
    //     console.log('error ',error);
    // });

    //Deleting the documents

    db.collection('users').find({}).toArray((error,result)=>{
        console.log("result ",result);
    });
    // db.collection('users').deleteMany({
    //     age : 26
    // }).then((result)=>{
    //     console.log('result ',result)
    // }).catch((error)=>{
    //     console.log('error',error);
    // })
});