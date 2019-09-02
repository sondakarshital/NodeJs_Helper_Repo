const mongoose = require('mongoose');

var schema = mongoose.Schema({
    title : {
        type : String,
        validate :{
            validator :(title)=>{
                return title.length>5
            },
            message : 'Title must must greater than length 5'
        }
    }
});


module.exports = schema;
