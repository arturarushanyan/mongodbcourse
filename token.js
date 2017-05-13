const jwt = require('jsonwebtoken');

let secret = 'TOPSECRETTTTT';

let UserToken = {
    generateToken : (data) => {
        let token =  jwt.sign({
            name : data.name,
        },secret);
        return token;
    }
};

module.exports = UserToken;