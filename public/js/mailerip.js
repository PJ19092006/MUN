const nodemailer = require("nodemailer");

async function mailerIp(recipientEmail, recipientName, Portfolio) {
  // Create a reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "YOUR_USER",
      pass: "YOUR_PASS",
    },
  });

  // Define the email options
  let mailOptions = {
    from: '"MUN Team" <sggsmun2024@gmail.com>', // sender address
    to: recipientEmail, // list of receivers
    subject: "Committee Allotment for SGGS MUN 2024", // Subject line
    text: `Dear ${recipientName},\n\nyour Portfolio:${Portfolio} \n\nBest regards,\nMUN Team`, // plain text body
  };

  // Send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = mailerIp;
