const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

// const senderEmail = "your email";
// const password = "Generated app password";

const EmailSender = (to_email, order_details) => {
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      logger: true,
      debug: true,
      secureConnection: false,
      auth: {
        user: senderEmail,
        pass: password,
      },
      tls: {
        rejectUnAuthorized: true,
      },
    });

    var info = transporter.sendMail({
      from: senderEmail,
      to: to_email,
      subject: "Order confirmation",
      text: `Your order details:\n\n${order_details}`,
    });
  } catch (error) {
    console.log(error);
  }
};
// export default EmailSender; // uncomment when checkout is working
EmailSender("Dalyaa0803@gmail.com", "your message");
