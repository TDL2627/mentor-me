var express = require("express");
const router = express.Router();

router.get("/from", function(req, res){
    let from=[
        {path:"Campus - Granger Bay",time:'07:00'},
        {path:"Campus - Simons Town",time:'09:00'},
        {path:"Campus - Cape Town Central",time:'11:00'},
        {path:"Campus - Wood Stock",time:'13:00'},
        {path:"Campus - Sea Point",time:'15:00'},
        {path:"Campus - New Fields",time:'17:00'}
        
      ]
      res.send(from)
 });

module.exports = router;