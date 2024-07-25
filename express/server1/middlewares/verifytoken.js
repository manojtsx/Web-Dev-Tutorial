// create a verifytoken middleware
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifytoken = (req, res, next) =>{
    try{
        const token = req.header('authorization').split(' ')[1];
        console.log(token);
        if(!token) return res.status(401).json({msg : 'Access Denied'});
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }catch(err){
        next(err);
    }
}

module.exports = verifytoken;