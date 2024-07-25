// sendOtpMailgun.js
const mailgun = require('mailgun-js');
require('dotenv').config();

const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

async function sendOTP(email) {
  const otp = generateOTP(); // Generate a random OTP

  const data = {
    from: 'Your Name <your_email@example.com>',
    to: email,
    subject: 'Your OTP',
    text: `Your OTP is: ${otp}`,
    html: `<strong>Your OTP is:</strong> ${otp}`,
  };

  try {
    await mg.messages().send(data);
    return otp; // Return the OTP for verification
  } catch (error) {
    console.error(error);
  }
}

function generateOTP() {
  // Generate a random 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
}

module.exports = sendOTP;
