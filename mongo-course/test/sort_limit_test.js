const assert = require('assert');
const User = require('../src/user');
describe('Sort limit related tests', ()=>{
    let shital,shaila,jyoti,chida,shiva,abhi
    beforeEach((done)=>{
       shital = new User({name : "shital"});
       shaila = new User({name : "shaila"});
       jyoti = new User({name : "jyoti"});
       chida = new User({name : "chida"});
       abhi = new User({name : "abhi"});
       shiva = new User({name : "shiva"});

       Promise.all([shital.save(),shaila.save(),jyoti.save(),chida.save(),abhi.save(),shiva.save()]).then(()=>{
            done();
       });
    });
    it.only('Post',async ()=>{
        const users = await User.find({}).sort({name:-1}).skip(0).limit(2);
        console.log('After post saved',users);
    })
})