const express = require('express')
const user = require('../controller/user.controller')
const router = express.Router();

router.get('/', (req, res) => {
    console.log("we are inside the user router")
    res.send("router working")
})
router.post('/authenticate', (user.authenticate))
router.post('/signup',(user.signup))

module.exports = router;