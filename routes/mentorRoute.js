var express = require("express");
const router = express.Router();

// route for time management
router.get("/", function (req, res) {
  let mentors = [
    {
      name: "Zainunesa Magmoed",
      pic: "nohead.jpeg",
      qualification: "Nautical Science",
      number: `<a  target="_blank" href="https://wa.me/27818373613"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
      email: "zainunesa.magmoed1@gmail.com",
    },

    {
      name: "Odirile Madiba",
      pic: "roar.jpeg",
      qualification: "Nautical Science",
      number: `<a  target="_blank" href="https://wa.me/27737605438"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
      email: "madiba@gmail.com",
    },
    {
      name: "Ulf Krohne",
      pic: "elf.jpeg",
      qualification: "Nautical Science",
      number: `<a  target="_blank" href="https://wa.me/264813938153"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
      email: "ulf@gmail.com",
    },
    {
      name: "Sinenhhlanhla Luthuli",
      pic: "haha.jpeg",
      qualification: "Nautical Science",
      number: `<a  target="_blank" href="https://wa.me/27846145920"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
      email: "luthu@gmail.com",
    },
    {
      name: "Nokwanda Sibiya",
      pic: "wakanda.jpeg",
      qualification: "Nautical Science",
      number: `<a  target="_blank" href="https://wa.me/27676119341"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
      email: "luthu@gmail.com",
    },
    // {
    //   name: "Japhet Mbila",
    //   pic: "mentor.png",
    //   qualification: "Marine Engineering",
    //   number: `<a  target="_blank" href="https://wa.me/27660400809"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-whatsapp-social-media-justicon-flat-justicon.png"/></a>`,
    //   email: "mbila@gmail.com",
    // },
  ];
  res.send(mentors);
});

module.exports = router;
