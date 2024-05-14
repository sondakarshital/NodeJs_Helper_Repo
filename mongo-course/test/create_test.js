const assert = require('assert');
const User = require('../src/user');
let shital;
describe('User model related tests', ()=>{
    it('saving user to db',async ()=>{
        shital = new User({
            name : "Shital",
            postCount : 1
        });
         await shital.save();
        console.log('data ',shital._id);
    });
    it('Finds the user with name shital',async ()=>{
        users = await User.find({name : 'Shital'});

        console.log('data ',users[0]);
        
    });
    it('Increment users postCount property',async()=>{
        var updatedUser = await User.update({name:'Shital'},{$inc :{postCount :10}});

        console.log('updatedUser ',updatedUser);
    });
    it('Finds the user with name shital',async ()=>{
        users = await User.find({name : 'Shital'});
        users = await User.find({name : 'Shital'})
        console.log('data ',users);
        
    });
})