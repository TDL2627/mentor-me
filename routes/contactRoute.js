const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config ();

router.post('/',(req,res) =>{ 
    const{name,feels,exp,issue,say} =req.body;
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
        from: 'melissamitchell2627@gmail.com',
        to: 'mymentor2627@gmail.com',
        subject: `From ${name} using the Mentor App`,
        text: `
        How ${name} is feeling :
        
        ${feels}

        The rating of ${name}'s two week experience :

        ${exp}

        Issues the ${name} is having  :

        ${issue}

         What the ${name} has to say :
            
        ${say}


        
        `,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(400).send({msg:"error"+error})
        } else {
          console.log('Email sent: ' + info.response);
          res.send(alert("Feed Back Sent."))
        }
      });
    
    
});

module.exports = router;