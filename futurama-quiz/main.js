var baseUrl = "https://mockapi-unadjzzymg.now.sh";
var questions;
var userInfo;

var quizInfo = {
	whichQuestion : 0,
	passScore: 70
}

var questionsAjax = {
	url: baseUrl + '/questions',
	method: 'GET'
};
var userAjax = {
	url: baseUrl + '/users',
	method: 'GET'
};

$.when( $.ajax( userAjax ), $.ajax( questionsAjax ) ).done(function(u, q){
	questions = q[0];userInfo = u[0][0];init();
	// starts program
})

.fail(function(err){
	console.log(err);
	console.log('Seems we have a ' + err.status + ' on one or more ajax requests');
});

function init(){
	$('#userName').text(userInfo.userName);
	userInfo['userScore'] = 0;
	// update display || possibly a method
	writeDisplay();
	
	
	
	// display next question
	writeNextQuestion();
	// display next answers
	nextPossibleAnswers();

	// listen for click
	$('#finalAnswer').on('click', checkAnswers);
}

// write display here

function writeDisplay(){
	$('#userScore').text(userInfo.userScore);
}

// write next question here
function writeNextQuestion(){
	$('#questionDisplay').text(questions[quizInfo.whichQuestion].question)
	// code for next question goes here

}	


// display next answers here
function nextPossibleAnswers(){
	// $('#possibleAnswersDisplay').text(questions[quizInfo.whichQuestion].possibleAnswers)
	var answersString = '';
	for(var i = 0; i < questions[quizInfo.whichQuestion].possibleAnswers.length; i++){
		console.log(i);
		answersString += '<label class="col-xs-6">';
		answersString += '<input type="radio" name="answers" value="' + questions[quizInfo.whichQuestion].possibleAnswers[i] + '" />';
		answersString += '<span>' + questions[quizInfo.whichQuestion].possibleAnswers[i] + '</span>';
		answersString += '</label>';
	}
	$('#possibleAnswersDisplay').html(answersString);
}



// check answer
function checkAnswers(){


	// if correct
	if ($("input[type=radio]:checked").val() == questions[quizInfo.whichQuestion].correctAnswer ){
		userInfo.userScore ++;
		 writeDisplay();
	} else {
		alert('Bite my shiney metal ass');
	}
		// display message
		// update score
		// update screen

	// if incorrect

		// display message
		// update screen

	//  is there another question
		// if yes display question
		// if no play closing screen
			// reset quiz

	quizInfo.whichQuestion ++ ;
	writeNextQuestion();
	nextPossibleAnswers();
}


