const express = require('express');

const app = express();
const userRoute = require('./routes/user-route');

app.use(express.json()); //middleware for interacting with json data

app.use('/api/user',userRoute);

app.listen(3000,function(){
    console.log('Server is running')
});