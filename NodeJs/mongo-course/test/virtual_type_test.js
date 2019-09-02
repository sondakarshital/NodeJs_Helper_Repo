const assert = require('assert');
const User = require('../src/user');

describe("virtual type test",()=>{
    it('post count returns number off post count',async ()=>{
        const user = new User({
            name : 'Shital S S',
            posts : [{title :'Java Course'},{title :'Javascript Course'}]
        });
        const result = await user.save();
        const shital = await User.findOne({name:'Shital S S'});
        console.log('user :::::::::::;',shital.postCount);
    })
})