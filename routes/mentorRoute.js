var express = require("express");
const router = express.Router();

// route for time management
router.get("/", function(req, res){
    let mentors=[
        {name:"Zainunesa Magmoed",
        pic:"mentor.png",
        qualification:"Nautical Science",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"zainunesa@gmail.com"
        },
        {name:"Ulf Krohne",
        pic:"mentor.png",
        qualification:"Nautical Science",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"ulf@gmail.com"
        },
        {name:"Odirile Madiba",
        pic:"mentor.png",
        qualification:"Nautical Science",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"madiba@gmail.com"
        },
        {name:"Sinenhlanhla Luthuli",
        pic:"mentor.png",
        qualification:"Nautical Science",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"luthu@gmail.com"
        },
        {name:"Minenhle Khuzwayo",
        pic:"mentor.png",
        qualification:"Nautical Science",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"zainunesamagmoed1@gmail.com"
        },
        {name:"Japhet Mbila",
        pic:"mentor.png",
        qualification:"Marine Engineering",
        number:`<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
        email:"mbila@gmail.com"
        },
      ]
      res.send(mentors)
 });

module.exports = router;