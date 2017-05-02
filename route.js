const express = require('express');
const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', function(req, res) {
    res.send('Some home page');
});
// define the about route
router.get('/about', function(req, res) {
    res.send('About page');
});

router.post('/login',(req,res)=>{
    console.log(req.body);
    console.log("I am online");
});
router.post('/register',(req,res)=>{
    console.log(req.body);
    console.log("I am online too");
});

module.exports = router;