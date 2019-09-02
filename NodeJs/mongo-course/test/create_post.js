const assert = require('assert');
const User = require('../src/user');
describe('User model related tests', ()=>{
    it('Post',async ()=>{
        const user = new User({
            name : 'Shital S',
            posts : [{title :'Java Course'}]
        });
        const result = await user.save();
        const shital = await User.findOne({name:'Shital S'});
        console.log('After post saved',shital);
    })
})