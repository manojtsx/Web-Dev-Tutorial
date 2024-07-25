const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const SALT = 10;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "teacher", "student", "parent"],
    default: "student",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    this.password = await bcrypt.hash(this.password, SALT);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    return err;
  }
};

userSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return token;
  } catch (err) {
    return err;
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
