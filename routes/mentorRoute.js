var express = require("express");
const router = express.Router();

// route for time management
router.get("/", function(req, res){
    let mentors=[
        {title:"Head of Curriculum and Learning",pic:'list.jpg',details:" 'Based on the time that I have known Ashley, he will measure up to high organisational expectations.'"}
      ]
      res.send(mentors)
 });

module.exports = router;