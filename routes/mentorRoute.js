var express = require("express");
const router = express.Router();

// route for time management
router.get("/", function(req, res){
    let mentors=[
        {name:"Zainunesa Magmoed",
        pic:`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="64" height="64"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z" fill="#58ffff"></path><g fill="#000000"><path d="M86.00043,47.2462c-13.6525,0 -24.725,11.0725 -24.725,24.725c0,13.6525 11.0725,24.725 24.725,24.725c13.6525,0 24.725,-11.0725 24.725,-24.725c0,-13.6525 -11.0725,-24.725 -24.725,-24.725zM86.00043,53.6962c10.105,0 18.275,8.17 18.275,18.275c0,10.105 -8.17,18.275 -18.275,18.275c-10.105,0 -18.275,-8.17 -18.275,-18.275c0,-10.105 8.17,-18.275 18.275,-18.275zM86.00043,105.2962c-17.63,0 -33.96916,9.56708 -42.67666,24.83208c-0.86,1.505 -0.32334,3.54708 1.28916,4.40708c0.5375,0.3225 1.075,0.43042 1.6125,0.43042c1.075,0 2.25708,-0.5375 2.79458,-1.6125c7.525,-13.33 21.71542,-21.60708 36.98042,-21.60708c15.265,0 29.455,8.27708 37.0875,21.60708c0.86,1.505 2.90208,2.04208 4.40708,1.18208c1.505,-0.86 2.04208,-2.90208 1.18208,-4.40708c-8.7075,-15.265 -25.04666,-24.83208 -42.67666,-24.83208z"></path></g></g></svg>`,
        number:"https://wa.me/+27818373613",
        email:"zainunesamagmoed1@gmail.com"
        }
      ]
      res.send(mentors)
 });

module.exports = router;