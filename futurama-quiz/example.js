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
	writeDisplay();
	
	// update display || possibly a method
	// display next question
	// display next answers
	// listen for click
}


// write display here

function writeDisplay(){
	$('#userScore').text(userInfo.userScore);
}

// write next question here
$($questions.get(currentQuesti))



// display next answers here




// check answer
	// if correct
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

