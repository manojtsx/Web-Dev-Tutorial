const nodemailer = require("nodemailer");
require("dotenv").config(); // Ensure you load .env variables

async function sendOTP(email) {
  const otp = generateOTP(); // Generate a random OTP

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // HTML email template
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your OTP Code</title>
        <style>
            /* Basic Reset */
            body, p, h1, h2, h3 {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
            }
            table {
                border-collapse: collapse;
            }
            .email-wrapper {
                width: 100%;
                background-color: #f4f4f4;
                padding: 20px;
            }
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #4CAF50;
                padding: 20px;
                text-align: center;
                color: #ffffff;
            }
            .content {
                padding: 20px;
                text-align: center;
            }
            .otp-code {
                font-size: 24px;
                font-weight: bold;
                color: #4CAF50;
                margin: 20px 0;
            }
            .footer {
                background-color: #f4f4f4;
                padding: 10px;
                text-align: center;
                color: #777;
                font-size: 12px;
            }
            a {
                color: #4CAF50;
                text-decoration: none;
            }
            @media only screen and (max-width: 600px) {
                .email-container {
                    width: 100% !important;
                }
                .content {
                    padding: 10px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-wrapper">
            <div class="email-container">
                <div class="header">
                    <h1>Your OTP Code</h1>
                </div>
                <div class="content">
                    <p>Dear User,</p>
                    <p>Thank you for registering with us. Your One-Time Password (OTP) is:</p>
                    <div class="otp-code">
                        ${otp}
                    </div>
                    <p>This OTP is valid for 10 minutes. If you did not request this OTP, please ignore this email.</p>
                    <p>If you need any help, please visit our <a href="#">Support Center</a>.</p>
                </div>
                <div class="footer">
                    <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                    <p><a href="#">Unsubscribe</a> | <a href="#">Privacy Policy</a></p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
  // Setup email data with unicode symbols
  const mailOptions = {
    from: { name: "Manoj Shrestha", address: process.env.EMAIL_USER },
    to: email,
    subject: "Your OTP",
    text: `Your OTP is: ${otp}`,
    html: `${htmlContent}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP sent to email:", email);
    return otp; // Return the OTP for verification
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send OTP");
  }
}

function generateOTP() {
  // Generate a random 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
}

module.exports = sendOTP;
