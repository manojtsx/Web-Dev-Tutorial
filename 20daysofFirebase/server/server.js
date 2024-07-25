// server.js
const express = require('express');
const cors = require('cors');
const sendOTPMailgun = require('./nodemailer'); // or sendOtpSmtp for SMTP
require('dotenv').config();

const app = express();
const port = 3000;
 
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  try {
    const otp = await sendOTPMailgun(email); // or sendOtpSmtp for SMTP
    res.status(200).json({ success: true, otp });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
