const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.set("port", process.env.port || 2627);


let users = [
 
 
]

app.get("/", function(req, res){
    res.send("This is home page");
});

app.get("/users", function(req, res){
    res.send(users)
});

app.post('/login', (req, res) => {
    res.json(req.body);
  });


const port = process.env.PORT || 2627;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
