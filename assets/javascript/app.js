//set up timeout event; ends after 30 second
var rightAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;


setTimeout(timeUp, 1000 * 5);

//time up screen
function timeUp() {
//to say time's up
	console.log("time up");
	$("#timer").text("Time's up sucka");
	$("#container").text("");
	$("#correct").text("Correct: "+rightAnswer+"");
	$("#wrong").text("Wrong: "+wrongAnswer+"");
	$("#unanswered").text("Unanswered: "+noAnswer+"");
//answers right
//answer wrong
};

function questionOne() {
	var correct = ".correct";
	var choice = 

	if (choice === correct) {
		rightAnswer++;
	};
	else {
		wrongAnswer++:
	}

}

function questionTwo() {
	
}

function questionThree() {
	
}

function questionOne() {
	
}

function questionOne() {
	
}