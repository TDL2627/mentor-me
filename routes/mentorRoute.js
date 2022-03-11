var express = require("express");
const router = express.Router();

// route for time management
router.get("/", function(req, res){
    let mentors=[
        {name:"Zainunesa Magmoed",
        pic:"mentor.png",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"zainunesamagmoed1@gmail.com"
        },
        {name:"Zainunesa Magmoed",
        pic:"mentor.png",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"zainunesamagmoed1@gmail.com"
        },
        {name:"Zainunesa Magmoed",
        pic:"mentor.png",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"zainunesamagmoed1@gmail.com"
        },
        {name:"Zainunesa Magmoed",
        pic:"mentor.png",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"zainunesamagmoed1@gmail.com"
        },
        {name:"Zainunesa Magmoed",
        pic:"mentor.png",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"zainunesamagmoed1@gmail.com"
        },
        {name:"Zainunesa Magmoed",
        pic:"mentor.png",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"zainunesamagmoed1@gmail.com"
        },
      ]
      res.send(mentors)
 });

module.exports = router;