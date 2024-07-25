const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.status(200).json({msg : "Got All Users"});
})

router.get('/:id',function(req,res){
    const id = req.params.id;
    res.status(200).json({msg : "Got All UserBy id" + id});
});

module.exports = router;