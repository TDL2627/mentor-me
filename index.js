const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mongoose = require("mongoose")
const studentRouter = require("./routes/studentRouter")
const contactRouter = require("./routes/contactRoute")
const infoRouter = require("./routes/infoRoute")
const mentorRouter = require("./routes/mentorRoute")
const noteRouter = require("./routes/noteRoute")
// mongo db connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));


app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use("/students", studentRouter);
app.use("/contact", contactRouter);
app.use("/info", infoRouter);
app.use("/mentors", mentorRouter);
app.use("/note", noteRouter);

app.set("port", process.env.port || 2627);


let students = [
 
 
]


// router links
app.get("/", function(req, res){
    res.send("This is home page");
});

app.get("/contact", function(req, res){
  res.send("This is contact page");
});

app.get("/info", function(req, res){
  res.send("This is the information page");
});

app.get("/students", function(req, res){
    res.send(students)
});

app.get("/note", function(req, res){
  res.send(notes)
});

app.post('/login', (req, res) => {
    res.json(req.body);
  });




const port = process.env.PORT || 2627;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// Status code reminders

// 200s => All good
// 400s => User input errors
// 500s => Server errors