const express = require('express')
const router = new express.Router();
const User = require('../model/user')

router.post('/user', async (req, res) => {
    try {
        var user = new User(req.body);
        await user.save();
        res.send(user)
    } catch (e) {
        res.status(400).send();
    }
});
router.get('/user/:id', async (req, res) => {
    try {
        var userId = req.params.id;
        var userInfo = await User.find({}).sort({ name: 1 })
        res.send(userInfo)
    } catch (e) {
        res.status(500).send('gooo to hell!!')
    }

});
module.exports = router;