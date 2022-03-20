const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config ();


router.post('/',(req,res) =>{ 
    const{name,feels,exp,issue,say,email,subject,number} =req.body;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
    port: 465,
    secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
      });
      
      let mailOptions = {
        from: 'peterpans2627@gmail.com',
        to: 'mymentor2627@gmail.com',
        subject: `From ${name} using the Mentor App`,
        text: `
   
       MENTEE DETAILS :
       NAME: ${name}
       EMAIL: ${email}
       NUMBER: ${number}
       SUBJECT: ${subject}
       ---------------
        FEEDBACK :

        How ${name} is feeling :
        
        ${feels}

        The rating of ${name}'s two week experience :

        ${exp}

        Issues  ${name} is having  :

        ${issue}

         What  ${name} has to say :
            
        ${say}


        DEVELOPED BY TDL2627
        `,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(400).send({msg:"error"+error})
        } else {
          console.log('Email sent: ' + info.response);
          res.send()
        }
      });
    
    
});

// when student edits their account
router.post('/edit',(req,res) =>{ 
  const{name,email,subject,number} =req.body;
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
  port: 465,
  secure: true,
      auth: {
          user: process.env.USER,
          pass: process.env.PASS
      }
    });
    
    let mailOptions = {
      from: 'peterpans2627@gmail.com',
      to: `${email}`,
      subject: `From ${name} using the Mentor App`,
      text: `
 

     MENTEE DETAILS :
     NAME: ${name}
     EMAIL: ${email}
     NUMBER: ${number}
     SUBJECT: ${subject}
     ---------------
    You have edited your profile.
    Thank you for using this app.

    DEVELOPED BY TDL2627
      
      `,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(400).send({msg:"error"+error})
      } else {
        console.log('Email sent: ' + info.response);
        res.send()
      }
    });
  
  
});

router.post('/delete',(req,res) =>{ 
  const{name,email} =req.body;
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
  port: 465,
  secure: true,
      auth: {
          user: process.env.USER,
          pass: process.env.PASS
      }
    });
    
    let mailOptions = {
      from: 'peterpans2627@gmail.com',
      to: `${email}`,
      subject: `From ${name} using the Mentor App`,
      text: `
 
    You have deleted your account.
    Thank you for using this app.

    DEVELOPED BY TDL2627
      
      `,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(400).send({msg:"error"+error})
      } else {
        console.log('Email sent: ' + info.response);
        res.send()
      }
    });
  
  
});


module.exports = router;