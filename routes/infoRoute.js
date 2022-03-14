var express = require("express");
const router = express.Router();


// route for time management
router.get("/time", function(req, res){
    let time=[
        {title:"Make a To Do List",pic:'list.jpg',details:"Identify what you need to do, and then prioritize the tasks based on when the assignment is due and how much time you need to complete it. This gives you a set plan for the day. Whether it’s just a list of priorities or a full schedule for the day, having a plan will ensure that you know what to do and when."},
        {title:"Tackle the small tasks first",pic:'list2.jpg',details:" It’s easy to get overwhelmed by large projects and big exams, and the anxiety can make you want to procrastinate. Start with shorter, simpler to-do items and then move on to larger projects or assignments."},
        {title:"Use breaks wisely",pic:'list3.jpg',details:" The time between work, classes, activities, and meetings can be used to complete tasks. People who use the Pomodoro Technique, developed in the 1990s, work in short intervals and take short, regular, timed breaks or 'Pomodoros.' For example, you might use a timer to work in 25-minute sprints, broken up by 5-minute breaks away from your workspace. Every fourth Pomodoro, take a longer break."}

      ]
      res.send(time)
 });

//  route for exam prep
 router.get("/exam", function(req, res){
  let exam=[
      {title:"Music can help concentration",pic:'exam1.jpg',details:" Music can be a great way to focus. Whats important is that it has the right tempo , not too fast and not too slow. Taboo is anything that upsets you or songs with lyrics that will distract you from studying. Chill out and concentration music are well suited (yes, those actually exist)."},
      {title:"Keep your study material organized",pic:'exam2.jpg',details:"Keep your study plan up to date and always make sure that all of your study materials are complete and correct. And that does not only apply to your notes, you should always have necessary materials to hand: books, pens, paper for example."},
      {title:"Get enough sleep",pic:'exam3.jpg',details:"Sleeping at least 8 hours every night, eating properly and drinking plenty of water are all important things you need to do for your brain. Studying for exams is like strenuous exercise, so you must be physically prepared."},
    ]
    res.send(exam)
});

//  route for mental help
router.get("/mental", function(req, res){
  let mental=[
      {title:"Check-in with a campus counselor",pic:'mental1.jpg',details:"With counseling, you are given a set time just for you. You can vent to someone who will keep what you say confidential. They will give you objective advice and even help you with time management, goal setting, and building a support network."},
      {title:"Be active",pic:'mental2.jpg',details:"When you are active, endorphins are released into your body, along with dopamine and serotonin.These chemicals boost your mood, suppress pain, and gives you a feeling of reward. Sticking to an exercise routine, even if it is walking for thirty minutes each day, can elevate your mood. Exercise can also help you sleep better, have more energy during the day, and concentrate better on assignments and during tests."},
      {title:"Avoid drugs and alchohol",pic:'mental3.jpg',details:"Many think the party life is what college life is all about. What they may not understand is that you can party in college without using drugs or alcohol. You do not need substances to help you meet new friends or to have a good time. You don’t need them to relax.In fact, drugs and alcohol keep you from relaxing. They create problems, not solve them. And the negative aftereffects can last for days.Avoiding drugs and alcohol is the mental health tip for college students that can prevent hangovers, being late for class, sleep issues, and making a fool of yourself."}
    ]
    res.send(mental)
});

//  route for study
router.get("/study", function(req, res){
  let study=[
      {title:"Change your surroundings",pic:'study1.jpg',details:"When looking at the same four walls of your bedroom is driving you repeatedly into the arms of Netflix or Xbox, it is time for a change of scenery. Grab your laptop or your printed notes and find a quiet place to study."},
      {title:"Study with friends",pic:'study2.jpg',details:"Meet up or find your classmates online and set a designated time each week to meet online and quiz each other.Get a tutor to help you too."},
      {title:"Keep your study space clean",pic:'study3.jpg',details:"Cleaning might seem like a basic chore, but with numerous benefits to mental and physical health, cleaning is much more than that. Cleaning and having a clean, clutter-free living space has been linked to many positive health benefits including physical fitness, improved focus, sleep quality, and a reduction in stress and anxiety."},

    ]
    res.send(study)
});



module.exports = router;