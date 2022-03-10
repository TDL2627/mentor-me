var express = require("express");
const router = express.Router();



router.get("/time", function(req, res){
    let time=[
        {title:"Head of Curriculum and Learning",pic:'list.jpg',details:" 'Based on the time that I have known Ashley, he will measure up to high organisational expectations.'"},
       
      ]
      res.send(time)
 });



module.exports = router;