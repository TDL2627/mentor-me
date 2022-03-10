var express = require("express");
const router = express.Router();


// route for time management
router.get("/time", function(req, res){
    let time=[
        {title:"Head of Curriculum and Learning",pic:'list.jpg',details:" 'Based on the time that I have known Ashley, he will measure up to high organisational expectations.'"},
        {title:"Head of Curriculum and Learning",pic:'list.jpg',details:" 'Based on the time that I have known Ashley, he will measure up to high organisational expectations.'"}
      ]
      res.send(time)
 });

//  route for exam prep
 router.get("/exam", function(req, res){
  let exam=[
      {title:"Head of Curriculum and Learning",pic:'list.jpg',details:" 'Based on the time that I have known Ashley, he will measure up to high organisational expectations.'"},
     
    ]
    res.send(exam)
});

//  route for mental help
router.get("/mental", function(req, res){
  let mental=[
      {title:"Head of Curriculum and Learning",pic:'list.jpg',details:" 'Based on the time that I have known Ashley, he will measure up to high organisational expectations.'"},
    ]
    res.send(mental)
});

//  route for study
router.get("/study", function(req, res){
  let study=[
      {title:"Head of Curriculum and Learning",pic:'list.jpg',details:" 'Based on the time that I have known Ashley, he will measure up to high organisational expectations.'"},
    ]
    res.send(study)
});



module.exports = router;