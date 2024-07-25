const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller')
const verifytoken = require('../middlewares/verifytoken');

router.route('/register').post(userController.register);
router.route('/login').post(userController.login);
router.route('/user').get(verifytoken, (req,res)=>{
    res.status(200).json({msg : 'User is logged in', user : req.user});
});

module.exports = router;