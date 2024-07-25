const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
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

  let MailGenerator = new Mailgen({
    theme: "default",
    product : {
        name: "Manoj",
        link: "https://mailgen.js/",
        },
    });

    let response = {
        body : {
            name: "Manoj",
            intro: "Your OTP is:",
            action: {
                instructions: "Your OTP is:",
                button: {
                    color: "#22BC66",
                    text: otp,
                },
            },
        }
    }

    let mail = MailGenerator.generate(response);
    let message = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP",
        html: mail,
    };
    transporter.sendMail(message).then(() => {
        console.log("OTP sent to email:", email);
        return otp; // Return the OTP for verification
    }
    ).catch((error) => {
        console.error(error);
        throw new Error("Failed to send OTP");
    });
}

function generateOTP() {
  // Generate a random 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
}

module.exports = sendOTP;
