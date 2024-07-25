const User = require("../models/user-model");
const bcrypt = require('bcryptjs');
// const SALT = 10;

const register = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const isFound = await User.findOne({username})

    // const hashedPassword = await bcrypt.hash(password,SALT)

    if(isFound){
        throw new Error('Username already exists.')
    }
    const user = new User({
      name,
      username,
      password,
    });

    await user.save();

    res.status(200).json({ msg: "Method running successfully", user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


const login = async(req,res) =>{
  try{
      const {username, password} = req.body;
      const user = await User.findOne({username});
      if(!user){
        return res.status(404).json({msg : "User doesnot exists"});
      }
      console.log(user)
      const isMatch = await user.comparePassword(password);
      const token = await user.generateToken();
      if(!isMatch){
        return res.status(404).json({msg : "Password is incorrect"})
      }
      res.status(200).json({msg : 'Logged in', token})
      

  }catch(err){
    res.status(500).json({msg : err.message})
  }
}

module.exports = { register ,login };
