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
const shuttleRouter = require("./routes/shuttleRoute")

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
app.use("/shuttle", shuttleRouter);

app.set("port", process.env.port || 2627);


let students = [
]


// router links
app.get("/", function(req, res){
    res.send(`<h1>Welcome to myMentor app created by TDL2627</h1>
    https://mymentor-server.herokuapp.com/
    <br>
    http://localhost:2627/
    <style>
    .div1{
      background:aqua; text-align:center;
    }
    .div2{
      background:blue; color:white; text-align:center;
    }
    div{
      padding:50px;
    }
    h3{
      text-decoration:underline;
    }
    </style>
    <br><br>

    <div class="div1">
<h3>Student routes</h3>
<h5>GET (display all)</h5>
/students
<h5>GET (display one)</h5>
/students/:id
<h5>POST (add a new student)</h5>
/students
<h5>PUT (edit a student)</h5>
/students/:id
<h5>DELETE (delete a student)</h5>
/students/:id
<h5>PATCH (login in with a student use email and password)</h5>
/students
<br>
</div>
<div class="div2">
<h3>MENTOR routes</h3>
<h5>GET (display all)</h5>
/mentors
</div>

<div class="div1">
<h3>CONTACT routes</h3>
<h5>POST (feedback)</h5>
/contact
<h5>POST (when student deletes account)</h5>
/contact/delete
<h5>POST (when student edits profile)</h5>
/contact/edit
</div>

 <div class="div2">
 <h3>INFORMATION routes</h3>
 <h5>GET (display time management)</h5>
 /info/time
 <h5>GET (display exam preparation)</h5>
 /info/exam
 <h5>GET (display mental help)</h5>
 /info/mental
 <h5>GET (display study guide)</h5>
 /info/study
 </div>

 <div class="div1">
 <h3>MENTOR routes</h3>
 <h5>GET (display mentors)</h5>
 /mentors
 </div>

 <div class="div2">
 <h3>NOTEPAD routes</h3>
 <h5>GET (display all notes)</h5>
 /note
 <h5>GET (display one note)</h5>
 /note/:id
 <h5>POST (add a note)</h5>
 /note
 <h5>PUT (edit a note)</h5>
 /note/:id
 <h5>DELETE (delete one note)</h5>
 /note/:id
 </div>

 <div class="div1">
 <h3>SHUTTLE routes</h3>
 <h5>GET (display shuttle times)</h5>
 /shuttle
 </div>

 <div class="div2">
 <h3>ADMIN routes</h3>
 <h5>PATCH (login as admin)</h5>
 /students/admin
 <h5>GET (all notes as admin)</h5>
 /note/admin
 <h5>GET (all students as admin)</h5>
 /students
 </div>
    
    
    
    `);
});

app.get("/contact", function(req, res){
  res.send("This is contact page");
});

app.get("/info", function(req, res){
  res.send("This is the information page");
});

app.get("/shuttle", function(req, res){
  res.send("this is the shuttle page")
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