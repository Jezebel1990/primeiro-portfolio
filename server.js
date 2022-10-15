const express = require("express");
const { resolve, dirname } = require('path')
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();

app.use('/',
 express.static(
  resolve(
    --dirname,
    './build'
  )
 ))
app.use(cors());
app.use(express.json());
app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));
app.listen(process.env.PORT || 3000, (err) => {
  if (err) { return console.log(err) }
  console.log('Tudo funcionando certinho')
})
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "********@gmail.com",
    pass: ""
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
