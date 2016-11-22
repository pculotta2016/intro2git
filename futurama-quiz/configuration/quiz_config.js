
<!-- Paste this code into an external JavaScript file named: quiz_config.js  -->

/* This script and many more are available free online at
The JavaScript Source :: http://www.javascriptsource.com
Created by: James Crooke :: http://www.cj-design.com */

var questions = new Array();
var choices = new Array();
var answers = new Array();
var hint = new Array();
var response = new Array();

// To add more questions, just follow the format below.

questions[0] = "True or False the name Loxahatchee comes from the Seminole Indian name for &quot'lowchow&quot' and river &quot'hatchee&quot':";
choices[0] = new Array();
choices[0][0] = " True";
choices[0][1] = " False";
answers[0] = choices[0][0];
hint[0] = "You got a 50/50 chance dude!"

questions[1] = "What is the longest fork of the Loxahatchee River?";
choices[1] = new Array();
choices[1][0] = " Southwest Fork";
choices[1][1] = " North Fork";
choices[1][2] = " Northwest Fork";
answers[1] = choices[1][2];
hint[1] = "Hint: Use the aerial photo from 2007";

questions[2] = "How many Wild and Scenic rivers are in the entire state of Florida?";
choices[2] = new Array();
choices[2][0] = "5";
choices[2][1] = "2";
choices[2][2] = "7";
choices[2][3] = "10";
answers[2] = choices[2][2];
hint[2] = "";

questions[3] = "One of the best ways we can protect our estuary habitats is by protecting our freshwater rivers from pollution from stormwater runoff, marine debris, and poor water quality:";
choices[3] = new Array();
choices[3][0] = "True";
choices[3][1] = "False";
answers[3] = choices[3][0];
hint[3] = "You got a 50/50 chance dude!"

questions[4] = "Are Mangroves, Seagrasses and Oyster Reefs critical habitats in our estuary?";
choices[4] = new Array();
choices[4][0] = "True";
choices[4][1] = "False";
answers[4] = choices[4][0];
hint[4] = "You got a 50/50 chance dude!";



// response for getting 100%
response[0] = "Excellent, top marks!";
// response for getting 90% or more
response[1] = "Excellent, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "Oh dear, I think you need to go back to school (or try again)!";
