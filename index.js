import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer' 

const app = express();
const PORT = 6000;

app.get("/" , async function (request,response,next){
  response.send()
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'razeeth011@gmail.com',  
    pass: process.env.PASS
  }
});

var mailOptions = {
  from: 'razeeth011@gmail.com',
  to: 'razeeth663@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'VAnakam DA mapla'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

app.listen(PORT , ()=> console.log(`Port started in ${PORT}`))