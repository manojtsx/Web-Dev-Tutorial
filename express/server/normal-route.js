app.get('/',function(req,res){
    res.status(200).json({msg : "Hello"}) 
});

app.get('/greet',function(req,res){
    res.status(200).json({msg : "Good Morning"});
})