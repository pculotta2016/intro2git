

var useranswers = new Array();
var answered = 0;
var nextBtn;

var questionArea;


function renderQuiz(questionNum) {
	console.log("here1");
	questionArea = $("#quiz");
	console.log("here2");
    questionArea.append('<p class="question space">' + questions[questionNum] + ' <span id="result_' + questionNum + '"><img src="img/blank.gif" style="border:0" alt="" /></span></p>');
	console.log("here3");
    for(j=0;j<choices[questionNum].length;j++) {
      questionArea.append('<input type="radio" name="answer_' + questionNum + '" value="' + choices[questionNum][j] + '" id="answer_' + questionNum + '_' + j + '" class="question_' + questionNum + '" onclick="submitAnswer(' + questionNum + ', this, \'question_' + questionNum + '\', \'label_' + questionNum + '_' + j + '\')" /><label id="label_' + questionNum + '_' + j + '" for="answer_' + questionNum + '_' + j + '"> ' + choices[questionNum][j] + '</label><br />');
    }
	console.log("here4");
	//questionArea.append('<p class="hint"></p><a class="nextBtn hidden" </a>');

	//document.writeln('<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	nextBtn = $(".nextBtn");

	
	}



function submitAnswer(questionId, obj, classId, labelId) {
  useranswers[questionId] = obj.value;
  document.getElementById(labelId).style.fontWeight = "bold";
 // disableQuestion(classId);
  showResult(questionId);
  answered++;
}

function showResult(questionId) {
  if(answers[questionId] == useranswers[questionId]) {
    document.getElementById('result_' + questionId).innerHTML = '<img src="img/correct.gif" style="border:0" alt="Correct!" />';
	//document.writeln('<p><input type="submit" value="Next Mission" onclick="" /></p><p style="display:none"><img src="correct.gif" style="border:0" alt="Correct!" /><img src="incorrect.gif" style="border:0" alt="Incorrect!" /></p>');
	//nextBtn addclass .is-hidden;
	displayButton();
  } else {
    document.getElementById('result_' + questionId).innerHTML = '<img src="img/incorrect.gif" style="border:0" alt="Incorrect!" />';
	displayHint(questionId);
  }
}

//this will show hint
function displayHint(questionId) {
//	document.writeln('<label for="hint">' + hint[questionId] + '</label><br />');

//document.querySelector(hint[questionId]);
	//alert(hint[questionId]);
	document.querySelector('.hint').innerText = hint[questionId];
	
	nextBtn.addClass("hidden"); //hides button
}

//this will show button to go to next page
function displayButton() {
	

	document.querySelector('.hint').innerText = "";	// hide hint
	
	console.log("not hidden");
	
	nextBtn.removeClass("hidden"); //display button

	// Go to the next question or page
	
}

function showScore() {
  if(answered != answers.length) {
    alert("You have not answered all of the questions yet!");
    return false;
  }
  questionCount = answers.length;
  correct = 0;
  incorrect = 0;
  for(i=0;i<questionCount;i++) {
    if(useranswers[i] == answers[i])
      correct++;
    else
      incorrect++;
  }
  pc = Math.round((correct / questionCount) * 100);
  alertMsg = "You scored " + correct + " out of " + questionCount + "\n\n";
  alertMsg += "You correctly answered " + pc + "% of the questions! \n\n";
  if(pc == 100)
    alertMsg += response[0];
  else if(pc >= 90)
    alertMsg += response[1];
  else if(pc >= 70)
    alertMsg += response[2];
  else if(pc > 50)
    alertMsg += response[3];
  else if(pc >= 40)
    alertMsg += response[4];
  else if(pc >= 20)
    alertMsg += response[5];
  else if(pc >= 10)
    alertMsg += response[6];
  else
    alertMsg += response[7];
  if(pc < 100) {
    if(confirm(alertMsg))
      resetQuiz(false);
    else
      return false;
  } else {
    alert(alertMsg);
  }
}
function disableQuestion(classId) {
  var alltags=document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].className == classId) {
      alltags[i].disabled = true;
    }
  }
}




