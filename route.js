const express = require('express');
const router = express.Router();
const UserModel = require('./models/users');
const productModel = require('./models/products');
const UserToken = require('./token.js');

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

    let token = UserToken.generateToken(req.body);

    console.log("postnam data" + req.body);
    UserModel.create({

            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age,
            token : token},
            (err,result) => {
                if (err){
                    throw err;
                } else {
                    console.log('postuser'+result);
                }
    });
});

router.post('/addproduct',(req,res) => {
    productModel.create({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        quantity: req.body.quantity,
        cpu: req.body.cpu
        },
        (err,data) => {
        if (err){
            throw err;
        } else {
            console.log("poduct added" + data);
        }
    });
});

module.exports = router;