const express = require("express");
const app = express();
const authRoute = require("./routes/auth-route");
const connectDB = require('./utils/connectDb');
const userRoute = require('./routes/user-route');

app.use(express.json());
app.use("/api/auth", authRoute);
app.use('/api/user',userRoute);

connectDB().then((data) => {
  app.listen(3000, () => {
    console.log("Listening to the server");
  });
}).catch((err)=>{
  console.log(err.message)
});
