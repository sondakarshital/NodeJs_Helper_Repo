const assert = require('assert');
const User = require('../src/user');

describe('Validation',()=>{
    it('Validate user',()=>{
        const  user = new User({
            name :undefined
        });
        const validateResult = user.validateSync();
        const {message} = validateResult.errors.name
        console.log('message ',message);
        assert(message == "Name is required");
    });
    it('Validate user for length check',()=>{
        const  user = new User({
            name :'A'
        });
        const validateResult = user.validateSync();
        const {message} = validateResult.errors.name
        console.log('message ',message);
        assert(message == "Name must be length of 2");
    });
    it('disallows invalid user from saving to database',async ()=>{
        const  user = new User({
            name :'Aa'
        });
        try{
        user = await user.save()
        }catch(validateResult){
            const {message} = validateResult.errors.name;
            assert(message == "Name must be length of 2");
        }
    });

})
